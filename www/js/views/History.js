dd.ns("view");

dd.view.History = dd.view.TopLevelView.extend({

    id: "subview-history",
    className: "animated",

    initialize: function(options) {
        this.options = $.extend({}, { templateSelector: "#history-subview-tmpl"}, options);
        this.constructor.__super__.initialize.apply(this);        
	},

    refresh: function() {
        this.render({model:{}});
    }
});
