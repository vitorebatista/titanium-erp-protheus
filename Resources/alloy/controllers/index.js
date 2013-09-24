function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    if (true && Alloy.isTablet) {
        $.__views.master = Alloy.createController("master", {
            id: "master"
        });
        $.__views.detail = Alloy.createController("detail", {
            id: "detail"
        });
        $.__views.index = Ti.UI.iPad.createSplitWindow({
            height: Ti.UI.FILL,
            top: "0dp",
            fullscreen: false,
            masterView: $.__views.master.getViewEx({
                recurse: true
            }),
            detailView: $.__views.detail.getViewEx({
                recurse: true
            }),
            id: "index"
        });
        $.__views.index && $.addTopLevelView($.__views.index);
    }
    if (true && !Alloy.isTablet) {
        $.__views.index = Ti.UI.createWindow({
            backgroundColor: "#fff",
            height: Ti.UI.FILL,
            top: "0dp",
            fullscreen: false,
            id: "index"
        });
        $.__views.index && $.addTopLevelView($.__views.index);
        $.__views.master = Alloy.createController("master", {
            id: "master"
        });
        $.__views.navgroup = Ti.UI.iPhone.createNavigationGroup({
            window: $.__views.master.getViewEx({
                recurse: true
            }),
            id: "navgroup"
        });
        $.__views.index.add($.__views.navgroup);
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    true && Alloy.isHandheld && (Alloy.Globals.navgroup = $.navgroup);
    $.master.on("localizacao", function() {
        var controller = true && Alloy.isTablet ? $.detail : Alloy.createController("localizacao");
        var win = controller.getView();
        true && Alloy.isHandheld && Alloy.Globals.navgroup.open(win);
    });
    $.master.on("especialidade", function() {
        var controller = true && Alloy.isTablet ? $.detail : Alloy.createController("especialidade");
        var win = controller.getView();
        true && Alloy.isHandheld && Alloy.Globals.navgroup.open(win);
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;