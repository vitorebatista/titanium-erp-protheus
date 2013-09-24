function Controller() {
    function __alloyId12() {
        __alloyId12.opts || {};
        var models = __alloyId11.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId6 = models[i];
            __alloyId6.__transform = {};
            var __alloyId7 = Ti.UI.createTableViewRow({
                height: "50dp",
                backgroundColor: "#fff",
                focusable: false,
                selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
            });
            rows.push(__alloyId7);
            viewTPS ? __alloyId7.addEventListener("click", viewTPS) : __defers["__alloyId7!click!viewTPS"] = true;
            var __alloyId8 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                left: 10,
                text: "undefined" != typeof __alloyId6.__transform["TPS_CODLOC"] ? __alloyId6.__transform["TPS_CODLOC"] : __alloyId6.get("TPS_CODLOC")
            });
            __alloyId7.add(__alloyId8);
            var __alloyId9 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                center: 0,
                text: "undefined" != typeof __alloyId6.__transform["TPS_NOME"] ? __alloyId6.__transform["TPS_NOME"] : __alloyId6.get("TPS_NOME")
            });
            __alloyId7.add(__alloyId9);
            var __alloyId10 = Ti.UI.createImageView({
                image: "/red_x.png",
                right: 0,
                height: "50dp",
                width: "50dp"
            });
            __alloyId7.add(__alloyId10);
            editRegTPS ? __alloyId10.addEventListener("click", editRegTPS) : __defers["__alloyId10!click!editRegTPS"] = true;
        }
        $.__views.tblTPS.setData(rows);
    }
    function addRegTPS() {
        var controller = true && Alloy.isTablet ? $.detail : Alloy.createController("localizacao_incluir");
        var win = controller.getView();
        true && Alloy.isHandheld && Alloy.Globals.navgroup.open(win);
    }
    function editRegTPS() {
        alert("edit");
    }
    function viewTPS() {
        alert("view");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "localizacao";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winLocal = Ti.UI.createWindow({
        backgroundColor: "#fff",
        layout: "vertical",
        background: "#fff",
        color: "#fff",
        id: "winLocal",
        title: "Localização"
    });
    $.__views.winLocal && $.addTopLevelView($.__views.winLocal);
    $.__views.__alloyId5 = Ti.UI.createButton({
        title: "Inserir",
        id: "__alloyId5"
    });
    addRegTPS ? $.__views.__alloyId5.addEventListener("click", addRegTPS) : __defers["$.__views.__alloyId5!click!addRegTPS"] = true;
    $.__views.winLocal.rightNavButton = $.__views.__alloyId5;
    $.__views.tblTPS = Ti.UI.createTableView({
        id: "tblTPS"
    });
    $.__views.winLocal.add($.__views.tblTPS);
    var __alloyId11 = Alloy.Collections["TPS"] || TPS;
    __alloyId11.on("fetch destroy change add remove reset", __alloyId12);
    exports.destroy = function() {
        __alloyId11.off("fetch destroy change add remove reset", __alloyId12);
    };
    _.extend($, $.__views);
    __defers["$.__views.__alloyId5!click!addRegTPS"] && $.__views.__alloyId5.addEventListener("click", addRegTPS);
    __defers["__alloyId7!click!viewTPS"] && __alloyId7.addEventListener("click", viewTPS);
    __defers["__alloyId10!click!editRegTPS"] && __alloyId10.addEventListener("click", editRegTPS);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;