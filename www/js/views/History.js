
dd.ns("view");

dd.view.History = dd.view.TemplateView.extend({

    id: "subview-history",
    className: "animated",

    events: {
    	"click button": "_close"
    },


    initialize: function(options) {
        this.options = $.extend({}, { templateSelector: "#history-subview-tmpl"}, options);
        console.log (this.options);
	},

    refresh: function() {
        this.render({model:{}});
    },

    _close: function () {
        this.options.router.navigate("/", { trigger: true });
    }
});
