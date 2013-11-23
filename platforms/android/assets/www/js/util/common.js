
window.dd = window.dd || {};
window.dd.ns = function (ns) {
    var nss = ns.split("."),
        currPath = window.dd;
    if (nss[0] === "dd") nss.splice(0, 1);
    for (var n= 0, len = nss.length; n < len; n++) {
        currPath = (currPath[nss[n]] = currPath[nss[n]] || {});
    }

    return currPath;
};

dd.ns("dd.util.bb");

/*
 * All events thrown above are also available globally.
 * This is great as you can bind for events for jquery widgets or objects that may not yet exist.
 * (note: also standard jquery events can be bound to through below, as will bubble up to global if not caught on specific DOM object)
 *	TODO consider replacing with BB custom event
 */
dd.util.globalEvent = {

    bind: function (eventTypes, eventCallback) {

        var events = eventTypes.split(",");
        for (var index= 0,len=events.length; index < len; index++) {
            $(document.body).bind($.trim(events[index]), eventCallback);
        }

        return dd.util.globalEvent;
    }
};

/* backbone equivalent of above - great for decoupling views */
dd.util.bb.globalEvents = $.extend({}, Backbone.Events);
dd.util.bb.globalEvents.oldbind = dd.util.bb.globalEvents.on;

// modify existing bind to handle multi event types, makes for cleaner bind code
dd.util.bb.globalEvents.on = function (eventTypes, eventCallback) {

    var events = eventTypes.split(","),
        bbEvts = dd.util.bb.globalEvents;

    for (var index= 0,len=events.length; index < len; index++) {
        bbEvts.oldbind($.trim(events[index]), eventCallback);
    }

    return bbEvts;
};

