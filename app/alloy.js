// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Collections.TPS = Alloy.createCollection('TPS');
Alloy.Collections.TPS.fetch();
Alloy.Collections.ST9 = Alloy.createCollection('ST9');
Alloy.Collections.ST9.fetch();
Alloy.Collections.SB1 = Alloy.createCollection('SB1');
Alloy.Collections.SB1.fetch();

Alloy.Globals.loading = Alloy.createWidget("nl.fokkezb.loading");
Alloy.Globals.SCREEN_WIDTH  = Titanium.Platform.displayCaps.platformWidth * 0.8;
//Alloy.Globals.drawer = Alloy.createWidget("nl.fokkezb.drawer");