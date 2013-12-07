
dd.ns("view");

dd.view.TopLevelView = dd.view.TemplateView.extend({

    events: {
    	"click button": "_close"
    },

    initialize: function(options) {
        //this.options = $.extend({}, {}, options);
        this.delegateEvents (); // ensure any events registered are now setup by bb
	},

    _close: function () {
        //alert ("clicked...");
        this.options.router.navigate("/", { trigger: true });
    }
});
