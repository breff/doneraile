
dd.ns("view");

dd.view.Info = dd.view.TemplateView.extend({

    id: "subview-ifo",
    className: "animated",

    events: {
    	"click button": "_close"
    },


    initialize: function(options) {
        this.options = $.extend({}, { templateSelector: "#info-subview-tmpl"}, options);
        console.log (this.options);
	},

    refresh: function() {
        this.render({model:{}});
    },

    _close: function () {
        this.options.router.navigate("/", { trigger: true });
    }
});