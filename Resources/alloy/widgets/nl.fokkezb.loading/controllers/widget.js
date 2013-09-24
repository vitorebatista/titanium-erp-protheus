function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.loading/" + s : s.substring(0, index) + "/nl.fokkezb.loading/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    function show(_message, _blocking) {
        "undefined" != typeof _message && setMessage(_message);
        "undefined" != typeof _blocking && setBlocking(_blocking);
        if (!win) {
            win = Widget.createController("window", args);
            win.on("cancel", onCancel);
        }
        return;
    }
    function hide() {
        if (win) {
            win.off("cancel", onCancel);
            win.hide();
            win = null;
        }
        return;
    }
    function onCancel() {
        $.trigger("cancel");
    }
    function setMessage(_message) {
        args.message = _message;
        win && win.setMessage(args.message);
        return;
    }
    function setBlocking(_blocking) {
        args.blocking = _blocking;
        win && win.setBlocking(args.blocking);
        return;
    }
    function setImages(_images) {
        args.images = _images;
        win && win.setImages(args.images);
        return;
    }
    var Widget = new (require("alloy/widget"))("nl.fokkezb.loading");
    this.__widgetId = "nl.fokkezb.loading";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var win, args = arguments[0] || {};
    args.show && show();
    Object.defineProperty($, "visible", {
        get: function() {
            return !!win;
        },
        set: function(visible) {
            return visible ? show() : hide();
        }
    });
    exports.show = show;
    exports.hide = hide;
    exports.setMessage = setMessage;
    exports.setBlocking = setBlocking;
    exports.setImages = setImages;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;