function Controller() {
    function Localizacao(e) {
        $.trigger("localizacao", e);
    }
    function Especialidade() {}
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "master";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.master = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "NG Informática",
        id: "master"
    });
    $.__views.master && $.addTopLevelView($.__views.master);
    $.__views.logo = Ti.UI.createImageView({
        width: 161,
        height: 61,
        top: 50,
        id: "logo",
        image: "/logo_ng.png"
    });
    $.__views.master.add($.__views.logo);
    $.__views.btnLocalizacao = Ti.UI.createButton({
        id: "btnLocalizacao",
        title: "Localização",
        top: "180",
        width: "90%",
        height: "50"
    });
    $.__views.master.add($.__views.btnLocalizacao);
    Localizacao ? $.__views.btnLocalizacao.addEventListener("click", Localizacao) : __defers["$.__views.btnLocalizacao!click!Localizacao"] = true;
    $.__views.btnEspecialidade = Ti.UI.createButton({
        id: "btnEspecialidade",
        title: "Especialidade",
        top: "250",
        width: "90%",
        height: "50"
    });
    $.__views.master.add($.__views.btnEspecialidade);
    Especialidade ? $.__views.btnEspecialidade.addEventListener("click", Especialidade) : __defers["$.__views.btnEspecialidade!click!Especialidade"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.btnLocalizacao!click!Localizacao"] && $.__views.btnLocalizacao.addEventListener("click", Localizacao);
    __defers["$.__views.btnEspecialidade!click!Especialidade"] && $.__views.btnEspecialidade.addEventListener("click", Especialidade);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;