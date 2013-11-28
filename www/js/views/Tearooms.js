
dd.ns("view");

dd.view.Tearooms = dd.view.TemplateView.extend({

    id: "subview-tearooms",
    className: "animated",

    events: {
    	"click button": "_close"
    },


    initialize: function(options) {
        this.options = $.extend({}, { templateSelector: "#tearooms-subview-tmpl"}, options);
        console.log (this.options);
	},

    refresh: function() {
        this.render({model:{}});
    },

    _close: function () {
        this.options.router.navigate("/", { trigger: true });
    }
});