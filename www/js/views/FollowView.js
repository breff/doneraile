
dd.ns("view");

dd.view.FollowView = dd.view.View.extend({

    _fixedMobileHeight: null,

    initialize: function(options) {
          this.constructor.__super__.initialize.apply(this);
  	},

    _loadTwitter: function () {
        navigator.app.loadUrl('https://twitter.com/DoneraileOnline', { openExternal:true } );
    },

    _loadFacebook: function () {
        navigator.app.loadUrl('https://www.facebook.com/DoneraileOnline', { openExternal:true } );
    },

    refresh: function() {

        if (this._fixedMobileHeight === null) {
            this._fixedMobileHeight = $(window).innerHeight ();
        }

        this.$el.find("#subview-follow").height (this._fixedMobileHeight-44);
    }
});
