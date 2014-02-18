Ti.include('/include/suds.js');

function focusTextField() {
    $.textCodigo.focus();
}

function closeKeyboard(e) {
    e.source.blur();
}


function openLeftWindow(){
	//Abre menu lateral esquerdo
	Alloy.Globals.drawer['toggleLeftWindow']();
}

function addTPS(){
	
	/*var window = Alloy.Globals.navgroup;

	var label = Ti.UI.createLabel({
	    top: 10,
	    left: 10,
	    width: 'auto',
	    height: 'auto',
	    text: 'Contacting currency rates web service...'
	});
	
	window.add(label);
	*/
	//var url = "http://192.168.0.158:8081/FWWSMODEL.apw?wsdl";
	var url = "http://177.204.17.99:8085/FWWSMODEL.apw";
	
	var operation = 'PUTXMLDATA';
	
	var soapRequest = "<MNTA055 Operation=\"3\" version=\"1.01\">"+
						  "<MNTA055_TPS modeltype=\"FIELDS\" >"+
						    "<TPS_FILIAL order=\"1\">"+
						      "<value>01</value>"+
						    "</TPS_FILIAL>"+
						    "<TPS_CODLOC order=\"2\">"+
						      "<value>"+$.textCodigo.getValue()+"</value>"+
						    "</TPS_CODLOC>"+
						    "<TPS_NOME order=\"3\">"+
						      "<value>"+$.textNome.getValue()+"</value>"+
						    "</TPS_NOME>"+
						  "</MNTA055_TPS>"+
						"</MNTA055>";

	var callparams = {//1
		USERLOGIN : "ADMIN",
		USERTOKEN : "ADMIN", //VE9UVlM=", //
		PASSWORD : "",
		MODELID : "MNTA055",
		MODELXML : Ti.Utils.base64encode(soapRequest).toString(),
		MODELPK : "TPS_CODLOC",
		TABLE : "TPS" //
	};
	
	var suds = new SudsClient({
	    endpoint: url,
	    targetNamespace: 'http://webservices.totvs.com.br/fwwsmodel.apw'
	});
		
	try {
		
		Alloy.Globals.loading.show('Sincronizando com o servidor...', false);
	    suds.invoke(operation, callparams, function(xmlDoc) {
		Alloy.Globals.loading.hide();
		
	        var results = xmlDoc.documentElement.getElementsByTagName('PUTXMLDATARESULT');
	        if (results && results.length>0) {
	            var result = results.item(0);
	            if (results.item(0).text = "true"){
	            	alert('Registro inserido com sucesso!');
	            	//label.text = "Registro inserido com sucesso!";
	            }else{
	            	alert('Registro inserido com sucesso: '+results.item(0).text);
	            	//label.text = "Sucesso: "+results.item(0).text;
	            }
	            Alloy.Globals.loading.hide();
				AddCollection();
				finishCallback();
				
	        } else {
	        	results = xmlDoc.documentElement.getElementsByTagName('faultstring');
	        	if (results && results.length>0) {
					alert('Erro: '+results.item(0).text);
					//label.text = "Erro: "+results.item(0).text;
					Alloy.Globals.loading.hide();
	          } else{
				alert('Erro: '+this.responseData);
				//label.text = "Erro: "+this.responseData;
				Alloy.Globals.loading.hide();
	          }
	          
	          //Ti.API.info('XML: ' + this.responseData);
	         
	        }
	    });
	} catch(e) {
	    Ti.API.error('Error: ' + e);
	    Alloy.Globals.loading.hide();
	}	

}


function AddCollection(){
    var table_TPS = Alloy.Collections.TPS;

    // Create a new model for the todo collection
    var info = Alloy.createModel('TPS', {
        TPS_CODLOC : $.textCodigo.getValue(),
        TPS_NOME : $.textNome.getValue()
    });

    // add new model to the global collection
    table_TPS.add(info);

    // save the model to persistent storage
    info.save();

    // reload the tasks
    table_TPS.fetch();
	//alert("inserido registro: "+$.textCodigo.getValue());
    //closeWindow();
}

function finishCallback(){

	$.winCenter.close();	

	//Abre menu para usuário escolher outra opção
	Alloy.Globals.drawer['toggleLeftWindow']();
};
