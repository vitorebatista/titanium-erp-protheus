/*
function IndexOpen(e) {
    //$.logo.init({ image: '/logo_ng.png', width: 161, height: 61 });
}

$.index.open();
//$.logo.hide();

//Abre uma nova janela para inclusão de Localização
function Localizacao() {
	Alloy.createController("localizacao").getView().open();	
}

function Especialidade() {
	
}
*/

if (OS_IOS && Alloy.isHandheld) {
	Alloy.Globals.navgroup = $.navgroup;
}

$.master.on('localizacao', function(e) {
	// get the detail controller and window references
	var controller = OS_IOS && Alloy.isTablet ? $.detail : Alloy.createController('localizacao');
	var win = controller.getView();

	// get boxer stats by name
	//controller.setBoxerStats(e.row.fighterName);

	// open the detail windows
	if (OS_IOS && Alloy.isHandheld) {
		Alloy.Globals.navgroup.open(win);
	} else if (OS_ANDROID) {
		win.open();
	}
});

$.master.on('especialidade', function(e) {
	// get the detail controller and window references
	var controller = OS_IOS && Alloy.isTablet ? $.detail : Alloy.createController('especialidade');
	var win = controller.getView();

	// get boxer stats by name
	//controller.setBoxerStats(e.row.fighterName);

	// open the detail windows
	if (OS_IOS && Alloy.isHandheld) {
		Alloy.Globals.navgroup.open(win);
	} else if (OS_ANDROID) {
		win.open();
	}
});




if (OS_ANDROID) {
	$.master.getView().open();
} else {
	$.index.open();
}

// runtime unit tests
if (!ENV_PROD) {
//	require('specs/index')($);
}