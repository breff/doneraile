
var _viewsCache = {};

var app = {

    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
/*
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
          document.addEventListener('deviceready', this.onDeviceReady, false);
        } else {
          this.onDeviceReady(); //this is the browser
        } */
        this.onDeviceReady(); //this is the browser

    },

    onDeviceReady: function() {

        app.receivedEvent('deviceready');

        var self = this;
         $(document).on('pageinit', function (e) {

             if ($(e.target).data("useView")) {
               var view = self._getCachedView ($(e.target));
               if (view) {
                   view.refresh ();
               }
             }
         });


        $(document).on('pagebeforeshow', function () {
            $.mobile.activePage.find(".ui-header a.ui-btn-left")
              .addClass("ui-alt-icon ui-nodisc-icon ui-btn-icon-notext")
              .removeClass("ui-btn-icon-left");
        });

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
    },

    _getCachedView: function ($el) {

        var view = null,
            viewClass = $el.data("useView");

        if (_viewsCache[viewClass]) {
            view = _viewsCache[viewClass];
        }
        else {
            view = _viewsCache[viewClass] = new dd.view[viewClass] ();
            view.setElement ($el);
        }

        return view;
    },
};
