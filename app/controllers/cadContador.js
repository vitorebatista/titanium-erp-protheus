//function initPicker() {
    // $.datePicker.minDate = new Date(2013, 1, 1);
    // var maxDate = new Date();
    // //today
    // $.datePicker.maxDate = maxDate;
    // $.datePicker.value = maxDate;
    // chosenDate = $.datePicker.value;
//}

function openLeftWindow(){
	//Abre menu lateral esquerdo
	Alloy.Globals.drawer['toggleLeftWindow']();
}

function addContador(){
	alert("Contador inserido com sucesso");
	
	$.winCenter.close();	

	//Abre menu para usuário escolher outra opção
	Alloy.Globals.drawer['toggleLeftWindow']();
}

