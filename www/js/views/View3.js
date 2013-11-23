
dd.ns("view");

dd.view.View3 = dd.view.TemplateView.extend({

    id: "view3",

    initialize: function() {
        this.options = $.extend({}, { templateSelector: "#view3-tmpl"}, this.options);
	},

    refresh: function() {
        this.render({model:{}});
    }

});