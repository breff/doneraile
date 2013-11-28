
dd.ns("view");

dd.view.Gallery = dd.view.TemplateView.extend({

    id: "subview-gallery",
    className: "animated",

    events: {
    	"click button": "_close"
    },


    initialize: function(options) {
        this.options = $.extend({}, { templateSelector: "#gallery-subview-tmpl"}, options);
        console.log (this.options);
	},

    refresh: function() {
        this.render({model:{}});
    },

    _close: function () {
        this.options.router.navigate("/", { trigger: true });
    }
});