function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.loading/" + s : s.substring(0, index) + "/nl.fokkezb.loading/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

function Controller() {
    function show(_message, _blocking) {
        "undefined" != typeof _message && setMessage(_message);
        "undefined" != typeof _blocking && setBlocking(_blocking);
        if (isShowing) return;
        $.loadingMask.open();
        return;
    }
    function onOpen() {
        hasImages ? $.loadingImages.start() : $.loadingIndicator.show();
        isShowing = true;
    }
    function hide() {
        if (!isShowing) return;
        $.loadingMask.close();
        return;
    }
    function onClose() {
        hasImages ? $.loadingImages.stop() : $.loadingIndicator.hide();
        isShowing = false;
    }
    function cancel() {
        if (false === args.blocking) {
            hide();
            $.trigger("cancel");
        }
        return;
    }
    function setMessage(_message) {
        if (false === _message) {
            if (hasMessage) {
                $.loadingInner.remove($.loadingMessage);
                hasMessage = false;
            }
        } else {
            var message = true === _message ? L("loadingMessage", "Loading..") : _message;
            $.loadingMessage.text = message;
            if (!hasMessage) {
                $.loadingInner.add($.loadingMessage);
                hasMessage = true;
            }
        }
        return;
    }
    function setBlocking(_blocking) {
        args.blocking = false !== _blocking;
    }
    function setImages(_images) {
        var _newImages = _.isArray(_images);
        if (true === _images || _newImages) {
            if (_newImages) {
                defaultImages || (defaultImages = $.loadingImages.images);
                $.loadingImages.images = _images;
            } else defaultImages && ($.loadingImages.images = defaultImages);
            if (!hasImages) {
                isShowing && $.loadingIndicator.hide();
                $.loadingSpinner.remove($.loadingIndicator);
                $.loadingSpinner.add($.loadingImages);
                isShowing && $.loadingImages.start();
            }
            hasImages = true;
        } else if (false === _images && hasImages) {
            isShowing && $.loadingImages.stop();
            $.loadingSpinner.remove($.loadingImages);
            $.loadingSpinner.add($.loadingIndicator);
            isShowing && $.loadingIndicator.show();
            hasImages = false;
        }
        return;
    }
    new (require("alloy/widget"))("nl.fokkezb.loading");
    this.__widgetId = "nl.fokkezb.loading";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "window";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.loadingMask = Ti.UI.createWindow({
        backgroundColor: "#5000",
        navBarHidden: true,
        backgroundImage: null,
        opacity: 1,
        id: "loadingMask"
    });
    $.__views.loadingMask && $.addTopLevelView($.__views.loadingMask);
    onOpen ? $.__views.loadingMask.addEventListener("open", onOpen) : __defers["$.__views.loadingMask!open!onOpen"] = true;
    onClose ? $.__views.loadingMask.addEventListener("close", onClose) : __defers["$.__views.loadingMask!close!onClose"] = true;
    cancel ? $.__views.loadingMask.addEventListener("click", cancel) : __defers["$.__views.loadingMask!click!cancel"] = true;
    $.__views.loadingOuter = Ti.UI.createView({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        borderRadius: "10dp",
        backgroundColor: "#C000",
        id: "loadingOuter"
    });
    $.__views.loadingMask.add($.__views.loadingOuter);
    $.__views.loadingInner = Ti.UI.createView({
        top: "20dp",
        right: "20dp",
        bottom: "20dp",
        left: "20dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "loadingInner"
    });
    $.__views.loadingOuter.add($.__views.loadingInner);
    $.__views.loadingSpinner = Ti.UI.createView({
        top: "0dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "loadingSpinner"
    });
    $.__views.loadingInner.add($.__views.loadingSpinner);
    $.__views.loadingIndicator = Ti.UI.createActivityIndicator({
        style: Ti.UI.ActivityIndicatorStyle.BIG,
        id: "loadingIndicator"
    });
    $.__views.loadingSpinner.add($.__views.loadingIndicator);
    $.__views.loadingMessage = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#fff",
        top: "20dp",
        text: L("loadingMessage", "Loading.."),
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        id: "loadingMessage"
    });
    $.__views.loadingInner.add($.__views.loadingMessage);
    $.__views.loadingImages = Ti.UI.createImageView({
        images: [ "/images/nl.fokkezb.loading/00.png", "/images/nl.fokkezb.loading/01.png", "/images/nl.fokkezb.loading/02.png", "/images/nl.fokkezb.loading/03.png", "/images/nl.fokkezb.loading/04.png", "/images/nl.fokkezb.loading/05.png", "/images/nl.fokkezb.loading/06.png", "/images/nl.fokkezb.loading/07.png", "/images/nl.fokkezb.loading/08.png", "/images/nl.fokkezb.loading/09.png", "/images/nl.fokkezb.loading/10.png", "/images/nl.fokkezb.loading/11.png" ],
        id: "loadingImages"
    });
    $.__views.loadingImages && $.addTopLevelView($.__views.loadingImages);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var defaultImages, args = arguments[0] || {}, hasMessage = true, hasImages = false, isShowing = false;
    setImages(args.images);
    show(args.message, args.blocking);
    exports.show = show;
    exports.hide = hide;
    exports.setMessage = setMessage;
    exports.setBlocking = setBlocking;
    exports.setImages = setImages;
    __defers["$.__views.loadingMask!open!onOpen"] && $.__views.loadingMask.addEventListener("open", onOpen);
    __defers["$.__views.loadingMask!close!onClose"] && $.__views.loadingMask.addEventListener("close", onClose);
    __defers["$.__views.loadingMask!click!cancel"] && $.__views.loadingMask.addEventListener("click", cancel);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;