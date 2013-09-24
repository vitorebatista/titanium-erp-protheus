function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "nl.fokkezb.loading/" + s : s.substring(0, index) + "/nl.fokkezb.loading/" + s.substring(index + 1);
    return true && 0 !== path.indexOf("/") ? "/" + path : path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "Window",
    style: {
        backgroundColor: "#fff"
    }
}, {
    isApi: true,
    priority: 1000.0003,
    key: "Label",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000"
    }
}, {
    isApi: true,
    priority: 1101.0002,
    key: "Window",
    style: {
        navBarHidden: true
    }
}, {
    isClass: true,
    priority: 10000.0006,
    key: "loadingMask",
    style: {
        backgroundColor: "#5000",
        backgroundImage: null,
        opacity: 1
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "loadingOuter",
    style: {
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        borderRadius: "10dp",
        backgroundColor: "#C000"
    }
}, {
    isClass: true,
    priority: 10000.0008,
    key: "loadingInner",
    style: {
        top: "20dp",
        right: "20dp",
        bottom: "20dp",
        left: "20dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        layout: "vertical"
    }
}, {
    isClass: true,
    priority: 10000.0009,
    key: "loadingSpinner",
    style: {
        top: "0dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE
    }
}, {
    isClass: true,
    priority: 10000.001,
    key: "loadingIndicator",
    style: {
        style: Ti.UI.ActivityIndicatorStyle.BIG
    }
}, {
    isClass: true,
    priority: 10000.0012,
    key: "loadingImages",
    style: {
        images: [ "/images/nl.fokkezb.loading/00.png", "/images/nl.fokkezb.loading/01.png", "/images/nl.fokkezb.loading/02.png", "/images/nl.fokkezb.loading/03.png", "/images/nl.fokkezb.loading/04.png", "/images/nl.fokkezb.loading/05.png", "/images/nl.fokkezb.loading/06.png", "/images/nl.fokkezb.loading/07.png", "/images/nl.fokkezb.loading/08.png", "/images/nl.fokkezb.loading/09.png", "/images/nl.fokkezb.loading/10.png", "/images/nl.fokkezb.loading/11.png" ]
    }
}, {
    isClass: true,
    priority: 10000.0013,
    key: "loadingMessage",
    style: {
        top: "20dp",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: L("loadingMessage", "Loading.."),
        color: "#fff",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER
    }
} ];