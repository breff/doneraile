
dd.ns("view");

dd.view.Info = dd.view.TopLevelView.extend({

    id: "subview-info",
    className: "animated",

    initialize: function(options) {
        this.options = $.extend({}, { templateSelector: "#info-subview-tmpl"}, options);
        this.constructor.__super__.initialize.apply(this);        
	},

    refresh: function() {
        this.render({model:{}});
    }
    
});