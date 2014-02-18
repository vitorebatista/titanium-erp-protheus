
function openLeftWindow(){
	//Abre menu lateral esquerdo
	Alloy.Globals.drawer['toggleLeftWindow']();
}

function addOrdem(){
	alert("Ordem de Serviço gerada com sucesso!");
	
	$.winCenter.close();	

	//Abre menu para usuário escolher outra opção
	Alloy.Globals.drawer['toggleLeftWindow']();
}
