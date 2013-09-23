exports.definition = {
    config: {
        columns: {
            TPS_CODLOC: "text",
            TPS_NOME: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "TPS"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("TPS", exports.definition, []);

collection = Alloy.C("TPS", exports.definition, model);

exports.Model = model;

exports.Collection = collection;