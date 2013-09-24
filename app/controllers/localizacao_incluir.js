/*var client = Ti.Network.createHTTPClient();
	client.onload = function() {
	var doc = this.responseXML.documentElement;
	//manually parse the SOAP XML document
};
*/
function addTPS(){
	
/*var soapRequest = "<?xml version=\"1.0\" encoding=\"UTF-8\"?> \n" +
"<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\" \n" +
"xmlns:SOAP-ENC=\"http://schemas.xmlsoap.org/soap/encoding/\" \n" +
"xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" \n" +
"xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" \n" +
"xmlns:xs=\"http://www.w3.org/2001/XMLSchema\" \n" +
"xmlns:wsse=\"http://schemas.xmlsoap.org/ws/2002/12/secext\"> \n" +
"<SOAP-ENV:Body id=\"_0\"> \n" +
"<GetUserDetailsReq> \n" +
"<Request> \n" +
"<SessionToken xsi:type=\"ns:IVRSessionToken\">XXXX</SessionToken> \n" +
"</Request> \n" +
"</GMGetUserDetailsReq> \n" +
"</SOAP-ENV:Body> \n" +
"</SOAP-ENV:Envelope>";

client.open('POST', 'https://someserver.com/someendpoint.asmx');
client.send({xml: soapRequest});
*/

	var soapRequest = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"+
						"<MNTA055 Operation=\"3\" version=\"1.01\">"+
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
							
	//var soapRequest = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" + "<MNTA055 Operation=\"3\" version=\"1.01\">" + "<MNTA055_TPS modeltype=\"FIELDS\" >" + "<TPS_FILIAL order=\"1\">" + "<value>01</value>" + "</TPS_FILIAL>" + "<TPS_CODLOC order=\"2\">" + "<value>" + $.textCodigo.getValue() + "</value>" + "</TPS_CODLOC>" + "<TPS_NOME order=\"3\">" + "<value>" + $.textNome.getValue() + "</value>" + "</TPS_NOME>" + "</MNTA055_TPS>" + "</MNTA055>";
						

	//var url = "http://192.168.0.158:8081/FWWSMODEL.apw?wsdl";
	var url = "http://177.204.17.99:8085/FWWSMODEL.apw?WSDL";
	
	var client = Ti.Network.createHTTPClient({
		// function called when the response data is available
		onload : function(e) {
			Ti.API.info("Received text: " + this.responseText);
			Ti.API.info("STATUS: " + this.status);
			Alloy.Globals.loading.hide();
			
			alert('Registro inserido com sucesso!');
		},
		// function called when an error occurs, including a timeout
		onerror : function(e) {
			Ti.API.debug(e.error);
			alert('Erro de comunicação, contacte seu administrador.');
			Alloy.Globals.loading.hide();
		},
		onsendstream : function(e) {
			Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress);
		},
		timeout : 5000 // in milliseconds
	});
	// Prepare the connection.
	client.open("POST", url);
	
	var param = {//1
		"method" : "PUTXMLDATA",
		"MODELID" : "MNTA055",
		"MODELXML" : soapRequest
	};
	
	client.send(param);
    Alloy.Globals.loading.show('Sincronizando com o servidor...', false);
	
	// Send the request.
	//client.send({xml: soapRequest});
}

