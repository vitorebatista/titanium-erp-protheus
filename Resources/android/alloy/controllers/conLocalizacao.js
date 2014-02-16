function Controller() {
    function __alloyId8(e) {
        if (e && e.fromAdapter) return;
        __alloyId8.opts || {};
        var models = __alloyId7.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId2 = models[i];
            __alloyId2.__transform = {};
            var __alloyId3 = Ti.UI.createTableViewRow({
                height: "50dp",
                backgroundColor: "#fff",
                focusable: false
            });
            rows.push(__alloyId3);
            viewTPS ? __alloyId3.addEventListener("click", viewTPS) : __defers["__alloyId3!click!viewTPS"] = true;
            var __alloyId4 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                left: 10,
                text: "undefined" != typeof __alloyId2.__transform["TPS_CODLOC"] ? __alloyId2.__transform["TPS_CODLOC"] : __alloyId2.get("TPS_CODLOC")
            });
            __alloyId3.add(__alloyId4);
            var __alloyId5 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                center: 0,
                text: "undefined" != typeof __alloyId2.__transform["TPS_NOME"] ? __alloyId2.__transform["TPS_NOME"] : __alloyId2.get("TPS_NOME")
            });
            __alloyId3.add(__alloyId5);
            var __alloyId6 = Ti.UI.createImageView({
                image: "/red_x.png",
                right: 0,
                height: "50dp",
                width: "50dp"
            });
            __alloyId3.add(__alloyId6);
            editRegTPS ? __alloyId6.addEventListener("click", editRegTPS) : __defers["__alloyId6!click!editRegTPS"] = true;
        }
        $.__views.tblTPS.setData(rows);
    }
    function editRegTPS() {
        alert("edit");
    }
    function viewTPS() {
        alert("view");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "conLocalizacao";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winLocal = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        layout: "vertical",
        background: "#fff",
        color: "#fff",
        id: "winLocal",
        title: "Localização"
    });
    $.__views.winLocal && $.addTopLevelView($.__views.winLocal);
    $.__views.tblTPS = Ti.UI.createTableView({
        id: "tblTPS"
    });
    $.__views.winLocal.add($.__views.tblTPS);
    var __alloyId7 = Alloy.Collections["TPS"] || TPS;
    __alloyId7.on("fetch destroy change add remove reset", __alloyId8);
    exports.destroy = function() {
        __alloyId7.off("fetch destroy change add remove reset", __alloyId8);
    };
    _.extend($, $.__views);
    __defers["__alloyId3!click!viewTPS"] && __alloyId3.addEventListener("click", viewTPS);
    __defers["__alloyId6!click!editRegTPS"] && __alloyId6.addEventListener("click", editRegTPS);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;