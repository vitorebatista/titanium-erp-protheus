function rowWasClicked(e) {
    alert(e.row.title);
}

function openWindow(e){
	
	//Fecha menu para apresentar somente o CenterWindow
	Alloy.Globals.drawer['toggleLeftWindow']();

	//Fecha a child window caso tenha alguma
	if(Alloy.Globals.window){
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
		
	//alert(e.source.id);

	if(Alloy.Globals.window){
		Alloy.Globals.centerWindow.openWindow(Alloy.Globals.window);//.open();
	}
		
}
