
dd.ns("view");

dd.view.Gallery = dd.view.TopLevelView.extend({

    id: "subview-gallery",
    className: "animated",
    _ssInited: false,

    initialize: function(options) {
        this.options = $.extend({}, { templateSelector: "#gallery-subview-tmpl"}, options);
        this.constructor.__super__.initialize.apply(this); 

        // TODO ("_initSS");
	},

    refresh: function() {
        this.render({model:{}});
        this._initSS ();
    },

    _initSS: function () {

        if (!this._ssInited) {
            var ssOptions = { enableKeyboard: true, backButtonHideEnabled: true, preventDefaultTouchEvents: true, captionAndToolbarAutoHideDelay: 0, captionAndToolbarFlipPosition: false, captionAndToolbarShowEmptyCaptions: false};
            //$(document.body).bind ("photoswipe.onhide", this._slideshowCleanup);

            //this._slideshow.ref = 
                this.$el.find(".gallery-item a").photoSwipe(ssOptions);
            this._ssInited = true;
        }
    }

});

