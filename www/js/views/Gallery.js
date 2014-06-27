
dd.ns("view");

dd.view.Gallery = dd.view.View.extend({

    _ssInited: false,

    initialize: function(options) {
        this.constructor.__super__.initialize.apply(this);

        // this.options.router.on ("route", function (route) {
        //
        //     if (route === "_default") {
        //         if ($(".ps-document-overlay").is(":visible")) {
        //             $(".ps-toolbar-content").click();
        //         }
        //     }
        // });

	},

    refresh: function() {
        if (!this._ssInited) {
            this._initSS ();
            this._ssInited = true;
        }
    },

    _initSS: function () {

        if (!this._ssInited) {

            var images = "";

            for (var i=1; i<=27; i++) {
                images += '<div class="gallery-item"><a href="img/gallery/'+i+'.jpg"><img src="img/gallery/'+i+'-thumb.png"/></a></div>';
            }
            this.$el.find("#subview-gallery").html (images);

        }

        var ssOptions = { enableKeyboard: false, backButtonHideEnabled: true, preventDefaultTouchEvents: true, captionAndToolbarAutoHideDelay: 0, captionAndToolbarFlipPosition: false, captionAndToolbarShowEmptyCaptions: false};
        //$(document.body).bind ("photoswipe.onhide", this._slideshowCleanup);

        //this._slideshow.ref =
            this.$el.find(".gallery-item a").photoSwipe(ssOptions);
    }

});
