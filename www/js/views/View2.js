
dd.ns("view");

dd.view.View2 = dd.view.TemplateView.extend({

    id: "view2",

    initialize: function() {
        this.options = $.extend({}, { templateSelector: "#view2-tmpl"}, this.options);
	},

    refresh: function() {
        this.render({model:{}});
    }

});