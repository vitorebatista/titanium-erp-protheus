var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.TPS = Alloy.createCollection("TPS");

Alloy.Globals.loading = Alloy.createWidget("nl.fokkezb.loading");

Alloy.createController("index");