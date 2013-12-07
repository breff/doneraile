
dd.ns("view");

dd.view.Follow = dd.view.TopLevelView.extend({

    id: "subview-follow",
    className: "animated",

    initialize: function(options) {
        this.options = $.extend({}, { templateSelector: "#follow-subview-tmpl"}, options);
        this.constructor.__super__.initialize.apply(this);        
	},

    refresh: function() {
        this.render({model:{}});
    }
});