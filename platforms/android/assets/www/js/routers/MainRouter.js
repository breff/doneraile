
dd.ns("dd.router");

dd.router.MainRouter = Backbone.Router.extend({

	_viewsCache: {},
	_$contentEl: $("#app-container"),

    routes: {
        "history" : "_showHistory",
        "view2" : "_showView2",
        "view3" : "_showView3",
        "*": "_default"
    },


    initialize: function () {

    	var self = this;

        $("body")
            .on ("click", "*[data-jshref]", function(e) {
            	self.navigate($(e.currentTarget).data("jshref"), { trigger: true });
            	return false;
        	});
    },

    _default: function () {
        console.log ("default route");
    },

	_showInContainer: function(viewClass, options) {

        console.log ("_showInContainer");

		var self = this,
			view = this._getCachedView (viewClass, options);

        this._$contentEl.find(">.page").hide();

        // inject if doesn't exist, then show it
        if (!$.contains(this._$contentEl.get(0), view.el)) {
            view.$el.addClass("page");
            this._$contentEl.append(view.$el);
        }

        view.show();
        view.$el.addClass("fadeInUpBig");

        return view;
	},

    _getCachedView: function (viewClass, options) {

        console.log (viewClass);

        var view = null;

        if (this._viewsCache[viewClass]) {
            console.log ("1");
            view = this._viewsCache[viewClass];
        }
        else {

            console.log ("INIT VIEW...");
            options.router = this;
            view = (this._viewsCache[viewClass] = new dd.view[viewClass] (options));

            console.log (this._viewsCache);
        }

        return view;
    },

    _showHistory: function() {
        this._showInContainer("History", {}).refresh();
    },

    _showView2: function() {
        this._showInContainer("View2", {}).refresh();
    },

    _showView3: function() {
        this._showInContainer("View3", {}).refresh();
    }



});