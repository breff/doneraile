
dd.ns("dd.view");

/**
 * @class View
 *
 * Enhances an ordinary Backbone View with:
 *  additional visibility information
 *  global event triggering  (allow bind to events globally as well as on a specific object reference)
 *
 * @extends Backbone.View
*/

dd.view.View = Backbone.View.extend({
    show : function () {
        this.$el.css ({ display: "" });     //changing show in favour of remove-hidden-state way, so as CSS can override showing items.
        this.trigger ("show.View", this);
    },

    hide : function () {
        this.$el.hide ();
        this.trigger ("hide.View", this);
    },

    isVisible: function () {
        return (this.$el.is(":visible"));
    },

    trigger: function (events, args) {
        
        dd.util.bb.globalEvents.trigger (events, args);

        // call root class trigger (as *this* could be part of large chain of inheritance) 
        var sup = this;
        while (1) {
            if (!(sup instanceof Backbone.View)) {
                sup.trigger.apply(this, [events, args]);
                break;
            }
            sup = sup.constructor.__super__; 
        }

        return this;
    },

});