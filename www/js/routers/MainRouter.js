
dd.ns("dd.router");

dd.router.MainRouter = Backbone.Router.extend({

	_viewsCache: {},
	_$contentEl: $("#app-container"),
    _currentView: null,

    routes: {
        "history" : "_showHistory",
        "follow" : "_showFollow",
        "gallery" : "_showGallery",
        "tearooms" : "_showTearooms",
        "info" : "_showInfo",
        "*path": "_default"
    },

    initialize: function () {

    	var self = this;

        $("body")
            .on ("touchstart", "*[data-jshref]", function(e) {
                var $tgt = $(e.currentTarget);
                
                /*
                if ($tgt.closest("#menu").length) {
                    $tgt.css ("background-color", "rgba(255, 255, 255, 0.2)");
                    setTimeout(function(){
                    //$tgt.css ("background-color", "red");
                    },2000);
                }*/

                self.navigate($tgt.data("jshref"), { trigger: true });
                return false;
        });

        $("body")
            .on ("click", "*[data-jshref]", function(e) {
                var $tgt = $(e.currentTarget);

                self.navigate($tgt.data("jshref"), { trigger: true });
                return false;
            });

    },

    _default: function () {

        if (this._currentView) {
            this._animateVertical (false);
        }
    },

    _nativeAnimate: function () {

        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf("android") !== -1) { // modern android should support anim
            return (ua.indexOf("android 4") !== -1);
        }
        else {
            return true; // native animate for all others...
        }
    },

	_showInContainer: function(viewClass, options) {

        console.log ("_showInContainer");

		var self = this,
			view = this._getCachedView (viewClass, options);

        this._$contentEl.addClass("enable-scrolling").find(">.page").hide();

        // inject if doesn't exist, then show it
        if (!$.contains(this._$contentEl.get(0), view.el)) {
            view.$el.addClass("page");
            this._$contentEl.append(view.$el);
        }

        view.show();
        this._currentView = view;        
        this._animateVertical (true);

        return view;
	},

    _animateVertical: function (open) {

        var self = this;

        if (open) {

            if (this._nativeAnimate()) {        
                this._currentView.$el.removeAttr("style").addClass("anim-perf-fix").removeClass("fadeInDownBig").addClass("fadeInUpBig");
                setTimeout(function () {
                    self._currentView.$el.removeClass("anim-perf-fix").css("animation-name", "none").css("-webkit-animation-name", "none");
                }, 700);
            }
            else {
                this._currentView.$el.css ({top: 0});
            }
        }

        // close
        else {
            
            this._$contentEl.scrollTop(0);            

            if (this._nativeAnimate()) {               
                this._currentView.$el.removeClass("fadeInUpBig").removeAttr("style").addClass("anim-perf-fix").addClass("fadeInDownBig");         
            }
            else {
                this._currentView.$el.css ({top: 1000});
            }

            this._$contentEl.removeClass("enable-scrolling");
        }
    },

    _getCachedView: function (viewClass, options) {

        var view = null;

        if (this._viewsCache[viewClass]) {
            view = this._viewsCache[viewClass];
        }
        else {
            options.router = this;
            view = (this._viewsCache[viewClass] = new dd.view[viewClass] (options));
        }

        return view;
    },

    _showHistory: function() {		
        this._showInContainer("History", {}).refresh();
    },

    _showFollow: function() {
        this._showInContainer("Follow", {}).refresh();
    },

    _showGallery: function() {
        this._showInContainer("Gallery", {}).refresh();
    },

    _showTearooms: function() {
        this._showInContainer("Tearooms", {}).refresh();
    },

    _showInfo: function() {
        this._showInContainer("Info", {}).refresh();
    }

});

