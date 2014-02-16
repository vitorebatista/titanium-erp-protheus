function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId9 = Alloy.createController("leftWindow", {
        id: "__alloyId9"
    });
    $.__views.__alloyId10 = Alloy.createController("centerWindow", {
        id: "__alloyId10"
    });
    $.__views.drawer = Alloy.createWidget("nl.fokkezb.drawer", "widget", {
        openDrawerGestureMode: "OPEN_MODE_ALL",
        closeDrawerGestureMode: "CLOSE_MODE_ALL",
        leftDrawerWidth: 500,
        shadowWidth: 40,
        animationMode: "ANIMATION_NONE",
        id: "drawer",
        children: [ $.__views.__alloyId9.getViewEx({
            recurse: true
        }), $.__views.__alloyId10.getViewEx({
            recurse: true
        }) ]
    });
    $.__views.drawer && $.addTopLevelView($.__views.drawer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Globals.drawer = $.drawer;
    Alloy.Globals.drawer.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;