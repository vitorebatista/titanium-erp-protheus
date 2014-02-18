function openLeftWindow(){
	//Abre menu lateral esquerdo
	Alloy.Globals.drawer['toggleLeftWindow']();
}

function addRegTPS(e){
	
		// get the detail controller and window references
	var controller = OS_IOS && Alloy.isTablet ? $.detail : Alloy.createController('cadLocalizacao');
	var win = controller.getView();
	var table_TPS = Alloy.Collections.TPS;
	//alert("add");
	// get boxer stats by name
	//controller.setBoxerStats(e.row.fighterName);

	// open the detail windows
	if (OS_IOS && Alloy.isHandheld) {
		table_TPS.fetch();
		Alloy.Globals.navgroup.openWindow(win, {animated:true});
	} else if (OS_ANDROID) {
		win.open();
	}
	
	//$.trigger('localizacao_incluir', e);
	//alert("teste");
	
}

function editRegTPS(){
	alert("edit");
}

function viewTPS() {
	alert("view");
}
