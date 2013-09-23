function addRegTPS(e){
	
		// get the detail controller and window references
	var controller = OS_IOS && Alloy.isTablet ? $.detail : Alloy.createController('localizacao_incluir');
	var win = controller.getView();
	//alert("add");
	// get boxer stats by name
	//controller.setBoxerStats(e.row.fighterName);

	// open the detail windows
	if (OS_IOS && Alloy.isHandheld) {
		Alloy.Globals.navgroup.open(win);
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
