
dd.ns("view");

dd.view.View1 = dd.view.TemplateView.extend({

    id: "view1",
    className: "animated",

    initialize: function() {
        this.options = $.extend({}, { templateSelector: "#view1-tmpl"}, this.options);
	},

    refresh: function() {
        this.render({model:{}});
    }
});