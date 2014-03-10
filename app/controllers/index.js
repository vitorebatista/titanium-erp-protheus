Alloy.Globals.drawer = $.drawer;
Alloy.Globals.drawer.open();
//Alloy.Globals.drawer['toggleLeftWindow']();

// Executa função de inicialização do app
Ti.include('/include/ngutilmobile.js');
SystemLoad();

Titanium.Network.addEventListener('change', function(e) {
    if(e.networkTypeName=='NONE')
    {
            alert("Verifique a sua conexão...");
    }
    else
    {
            //alert("Online");
    }
});