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
	//alert("Contador inserido com sucesso");
	

	var url = retCompleteURL() + "/NGMOBILE.apw";
	var operation = 'SETCOUNTER';
	
	var callparams = {//1
		cCodAsset : $.textBem.getValue(),
		cDate : $.textData.getValue(), //VE9UVlM=", //
		cHour : $.textHora.getValue(),
		nCounter : $.textContador.getValue()
	};

	var suds = new SudsClient({
	    endpoint: url,
	    targetNamespace: 'http://webservices.totvs.com.br/fwwsmodel.apw'
	});

	try {

		Alloy.Globals.loading.show('Inserindo contador...', false);

	    suds.invoke(operation, callparams, function(xmlDoc) {

			Alloy.Globals.loading.hide();

			//var doc = Titanium.XML.parseString(this.responseXML.documentElement.text);
			alert(this.responseXML.documentElement.text);
			
			results = xmlDoc.documentElement.getElementsByTagName('SETCOUNTERRESULT');
			
			//results = xmlDoc.documentElement.getElementsByTagName('ConversionRateResult');
	        if (results && results.length>0) {
	        	results = results.item(0).getElementsByTagName('SetCounter');
	        	if (results && results.length>0) {
	        		
					alert('Erro: '+results.item(0).text);
				}
			}else{
				alert("Registro inserido com sucesso!");
				$.winCenter.close();
				$.winCenter.hide();	
		
				//Abre menu para usuário escolher outra opção
				Alloy.Globals.drawer['toggleLeftWindow']();
			}
			
	    });
	} catch(e) {
	    Ti.API.error('Error: ' + e);
	}

	

}

