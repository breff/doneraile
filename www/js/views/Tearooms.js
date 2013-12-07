
dd.ns("view");

dd.view.Tearooms = dd.view.TopLevelView.extend({

    id: "subview-tearooms",
    className: "animated",

    initialize: function(options) {
        this.options = $.extend({}, { templateSelector: "#tearooms-subview-tmpl"}, options);
        this.constructor.__super__.initialize.apply(this);        
	},

    refresh: function() {
        this.render({model:{}});
    }
    
});