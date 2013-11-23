
dd.ns("dd.view");

/**
 * @class TemplateView
 *
 * Backbone View which is responsible for rendering itself based on construction data (from handlebars template).
 * See initialize method for default construction options.
 * Essentially a view with built-in boilerplate templating... just like SpinnerView without the spinning/inline container injection!
 *
 * @event TemplateView
 * @extends dd.view.View
*/

dd.view.TemplateView = dd.view.View.extend({

    _renderOptions: null,
    _isRenderedBefore: false,
    _template: null,
    _renderedAdSlots: [],

    initialize : function () {
      
        this.options = $.extend ({}, {futureEl: null, makeVisibleOnRender: true, renderOnce: false, templateSelector: null, renderFadeSpeed: 0}, this.options);
        return this;
    },

    setRenderOptions: function (options) {  // set how and what to render before .render called       

        this._renderOptions = $.extend ({}, {append: false, prepend: false, renderText: null, model: {}}, options);
        return this;
    },

    render: function (options) {

        if (options) { // render options can be specified at render time too
            this.setRenderOptions (options);
        }

        if (this.options.makeVisibleOnRender) {
            this.show();
        }

        if (!this._isRenderedBefore) { // if never rendered before, always render
            this._renderHtml ();
            this._isRenderedBefore = true;
        }
        else if (!this.options.renderOnce) { // if already rendered check if re-rendering allowed
            this._renderHtml ();
        }

        return this;
    },

    _renderHtml: function () {

        // check if this view contructed without DOM existing, it *must* exist now, so get ref to it
        if (this.options.futureEl) {
            this.el = (this.$el = $(this.options.futureEl))[0];
            this.delegateEvents ();
        }

        if (typeof this._renderOptions.renderText === "string") {
            this.$el.html(this._renderOptions.renderText);
        }
        else if (this.options.templateSelector) {

            if (!this._template) {
                if ($(this.options.templateSelector).html() === void 0) {
                    throw new Error("Template selector '"+ this.options.templateSelector +"' returned no template :-(");
                }
                this._template = Handlebars.compile($(this.options.templateSelector).html());
            }

            if (!this._renderOptions.append && !this._renderOptions.prepend && !this._renderOptions.after) {
                this.$el.html("");
            }

            if (this._renderOptions.after) {
                this.$(this._renderOptions.after).after(this._template (this._renderOptions.model));
            }

            if (this._renderOptions.prepend) {
                this.$el.prepend (this._template (this._renderOptions.model));
            }
            else {
                this.$el.append (this._template (this._renderOptions.model));
            }
        }
        else {
            throw "TemplateView Error: no mechanism of rendering (specify a 'templateSelector' on construction or 'renderText' on render)";
        }
    
        this.trigger ("render.TemplateView", this._renderOptions.model);
        this.tryRenderAdverts();
    },

    tryRenderAdverts: function() {
        var els = this.$("div.adunit"),
            _self = this;


        els.each(function() {
            var el = $(this),
                accountId = el.attr("data-account-id"),
                adUnit = el.attr("data-adunit"),
                adDims = _.map(el.attr("data-dimensions").split(","), function(i) { return parseInt(i, 10);  }),
                id = el.attr("id");

            if (_self._renderedAdSlots[id] === void 0) {
                googletag.cmd.push(function() {
                    _self._renderedAdSlots[id] = googletag.defineSlot('/' + accountId + '/' + adUnit, adDims, id).addService(googletag.pubads());
                });
                googletag.cmd.push(function() {
                    //googletag.pubads().enableSingleRequest();
                    googletag.enableServices();     //Only needs to be called once, but assume multiple times does no harm.. https://support.google.com/dfp_sb/answer/2372721?expand=googletag_details#enableServices
                    googletag.display(id);
                });
            } else {
                googletag.cmd.push(function() {
                    googletag.pubads().refresh([_self._renderedAdSlots[id]]);
                });
            }
        });
    },


    setTemplateSelector: function(selector) {
        if ($(selector).length === 0) {
            throw new Error("The selector '"+ selector +"' does not evaluate to a DOMElement");
        } else {
            this._template = null;
            this.options.templateSelector = selector;
        }
    }
});
