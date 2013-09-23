function Controller() {
    function addTPS() {
        var soapRequest = '<?xml version="1.0" encoding="UTF-8"?><MNTA055 Operation="3" version="1.01"><MNTA055_TPS modeltype="FIELDS" ><TPS_FILIAL order="1"><value>01</value></TPS_FILIAL><TPS_CODLOC order="2"><value>' + $.textCodigo.getValue() + "</value>" + "</TPS_CODLOC>" + '<TPS_NOME order="3">' + "<value>" + $.textNome.getValue() + "</value>" + "</TPS_NOME>" + "</MNTA055_TPS>" + "</MNTA055>";
        var url = "http://192.168.0.158:8081/FWWSMODEL.apw?wsdl";
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                Ti.API.info("Received text: " + this.responseText);
                Ti.API.info("STATUS: " + this.status);
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("Erro de comunicação, contacte seu administrador.");
            },
            onsendstream: function(e) {
                Ti.API.info("ONSENDSTREAM - PROGRESS: " + e.progress);
            },
            timeout: 5e3
        });
        client.open("POST", url);
        var param = {
            method: "PUTXMLDATA",
            MODELID: "MNTA055",
            MODELXML: soapRequest
        };
        client.send(param);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "localizacao_incluir";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.winLocal = Ti.UI.createWindow({
        backgroundColor: "#fff",
        navBarHidden: true,
        id: "winLocal",
        title: "Incluir Localizacação",
        modal: "true"
    });
    $.__views.winLocal && $.addTopLevelView($.__views.winLocal);
    $.__views.textCodigo = Ti.UI.createTextField({
        id: "textCodigo",
        keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD,
        hintText: "Código",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "10",
        left: "10",
        width: "90%",
        height: "60"
    });
    $.__views.winLocal.add($.__views.textCodigo);
    $.__views.textNome = Ti.UI.createTextField({
        id: "textNome",
        hintText: "Nome",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "90",
        left: "10",
        width: "90%",
        height: "60"
    });
    $.__views.winLocal.add($.__views.textNome);
    $.__views.__alloyId13 = Ti.UI.createButton({
        title: "Incluir",
        id: "__alloyId13"
    });
    $.__views.winLocal.add($.__views.__alloyId13);
    addTPS ? $.__views.__alloyId13.addEventListener("click", addTPS) : __defers["$.__views.__alloyId13!click!addTPS"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId13!click!addTPS"] && $.__views.__alloyId13.addEventListener("click", addTPS);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;