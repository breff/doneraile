
dd.ns("view");

dd.view.Follow = dd.view.TemplateView.extend({

    id: "subview-follow",
    className: "animated",

    events: {
    	"click button": "_close"
    },


    initialize: function(options) {
        this.options = $.extend({}, { templateSelector: "#follow-subview-tmpl"}, options);
        console.log (this.options);
	},

    refresh: function() {
        this.render({model:{}});
    },

    _close: function () {
        this.options.router.navigate("/", { trigger: true });
    }
});