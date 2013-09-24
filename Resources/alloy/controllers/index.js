function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.master = Alloy.createController("master", {
        id: "master"
    });
    $.__views.master && $.addTopLevelView($.__views.master);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.master.on("localizacao", function() {
        var controller = Alloy.createController("localizacao");
        var win = controller.getView();
        win.open();
    });
    $.master.on("especialidade", function() {
        var controller = Alloy.createController("especialidade");
        var win = controller.getView();
        win.open();
    });
    $.master.getView().open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;