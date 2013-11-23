
dd.ns("view");

dd.view.History = dd.view.TemplateView.extend({

    id: "subview-history",
    className: "animated",

    initialize: function() {
        this.options = $.extend({}, { templateSelector: "#history-subview-tmpl"}, this.options);
	},

    refresh: function() {
        this.render({model:{}});
    }
});