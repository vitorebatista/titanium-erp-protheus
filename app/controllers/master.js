var table_ST9 = Alloy.Collections.ST9;

function Localizacao(e){
	//Alloy.createController("detail").getView().open();
	$.trigger('localizacao', e);
}

//$.table.setData(data);
function Especialidade(){
	if (table_ST9.length == 0){
		SyncST9();
	}
}



function SyncST9(){
	var url = "http://177.204.17.99:8085/NGMOBILE.apw";
	
	var operation = 'GETASSETS';
	
	var suds = new SudsClient({
	    endpoint: url,
	    targetNamespace: 'http://192.168.0.8:8085/'
	});
		
	try {
		
		Alloy.Globals.loading.show('Sincronizando Bens...', false);
		
	    suds.invoke(operation,null , function(xmlDoc) {
	    	
		Alloy.Globals.loading.hide();
		
		
		var items = xmlDoc.documentElement.getElementsByTagName("GETASSETSRESULT"),
			c = 0,
			itemsCount = items.length;
				
		for (; c < itemsCount; c++){
			var item = items.item(c);
			
			code = item.getElementsByTagName('Code').item(0).firstChild.nodeValue;
		}
		
		alert('Erro: '+this.responseData);
			/*
	        var results = xmlDoc.documentElement.getElementsByTagName('GETASSETSRESULT');
	        if (results && results.length>0) {
	        	
	     
	        	
	            var result = results.item(0);
	            alert(Titanium.XML.parseString(results.item(0).text));
	            
	            if (results.item(0).text = "true"){
	            	alert('Bens sincronizados com sucesso!'+results.item(0).text);
	            	//label.text = "Registro inserido com sucesso!";
	            }else{
	            	alert('Bens sincronizados com sucesso: '+results.item(0).text);
	            	//label.text = "Sucesso: "+results.item(0).text;
	            }
				
				
	        } else {
	        	results = xmlDoc.documentElement.getElementsByTagName('faultstring');
	        	if (results && results.length>0) {
					alert('Erro: '+results.item(0).text);
					//label.text = "Erro: "+results.item(0).text;
	          } else{
				alert('Erro: '+this.responseData);
				//label.text = "Erro: "+this.responseData;
	          }
	          
	          Ti.API.info('XML: ' + this.responseData);
	         
	        }*/
	    });
	} catch(e) {
	    Ti.API.error('Error: ' + e);
	}	
}

/*$.master.on('localizacao_incluir', function(e) {
	// get the detail controller and window references
	var controller = OS_IOS && Alloy.isTablet ? $.detail : Alloy.createController('localizacao_incluir');
	var win = controller.getView();
	alert("add");
	// get boxer stats by name
	//controller.setBoxerStats(e.row.fighterName);

	// open the detail windows
	if (OS_IOS && Alloy.isHandheld) {
		Alloy.Globals.navgroup.open(win);
	} else if (OS_ANDROID) {
		win.open();
	}
});*/