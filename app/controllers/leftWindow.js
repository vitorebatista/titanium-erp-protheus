Ti.include('/include/ngutilmobile.js');

function rowWasClicked(e) {
    alert(e.row.title);
}

function openWindow(e) {

	//Fecha menu para apresentar somente o CenterWindow
	Alloy.Globals.drawer['toggleLeftWindow']();

	//Fecha a child window caso tenha alguma
	if(typeof Alloy.Globals.window !== 'undefined'){
		Alloy.Globals.window.close();
	}
		
	if(e.source.id == 'cadLocalizacao')
		Alloy.Globals.window = Alloy.createController('cadLocalizacao').getView();	
	else if(e.source.id == 'cadOrdem')
		Alloy.Globals.window = Alloy.createController('cadOrdem').getView();
	else if(e.source.id == 'cadContador')
		Alloy.Globals.window = Alloy.createController('cadContador').getView();
	else if(e.source.id == 'conBens')
		Alloy.Globals.window = Alloy.createController('conBens').getView();
	else if(e.source.id == 'conLocalizacao')
		Alloy.Globals.window = Alloy.createController('conLocalizacao').getView();
	else if(e.source.id == 'conOrdem')
		Alloy.Globals.window = Alloy.createController('conOrdem').getView();
	else if(e.source.id == 'relCustoCC')
		Alloy.Globals.window = Alloy.createController('relCustoCC').getView();
	else if(e.source.id == 'relCustoBem')
		Alloy.Globals.window = Alloy.createController('relCustoBem').getView();
	else if(e.source.id == 'parIntegracao')
		Alloy.Globals.window = Alloy.createController('parIntegracao').getView();
		
	//alert(e.source.id);

	if(typeof Alloy.Globals.window != 'undefined'){
		Alloy.Globals.centerWindow.openWindow(Alloy.Globals.window);//.open();
	}
		
}

function sincronismo() {
	
   	var confirm = Titanium.UI.createAlertDialog({
        title: 'Sincronismo de Dados',
        message: 'Deseja prosseguir com o sincronismo de dados do aplicativo com o ERP?',
        buttonNames: ['Confirma', 'Cancela'],
        cancel: 1
	});
	
	confirm.addEventListener('click', function(e) {
		
        if (e.cancel === e.index || e.cancel === true) {
        	return false;
    	}
    	
    	if (e.index === 0) {
   			AppSyncERP();
   		}
    
	});

	confirm.show();

}
