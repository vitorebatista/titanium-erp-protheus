Ti.include('/include/suds.js');

/**
 * Efetua sincronismo da tabela de bens com o ERP
 */
function SyncST9() {

	var url = retCompleteURL() + "/NGMOBILE.apw";
	var operation = 'GETASSETS';
	var table_ST9 = Alloy.Collections.ST9; // instancia a tabela de bens - ST9

	var suds = new SudsClient({
	    endpoint: url,
	    targetNamespace: 'http://webservices.totvs.com.br/fwwsmodel.apw'
	});

	try {

		Alloy.Globals.loading.show('Sincronizando tabela de bens com o servidor...', false);

	    suds.invoke(operation, null, function(xmlDoc) {

			Alloy.Globals.loading.hide();

			Alloy.Collections.ST9.deleteAll();

			var doc = this.responseXML.documentElement.text;

			while( doc.indexOf("Register") > -1  ) {

				var ini = doc.indexOf("<Register>");
				var fim = doc.indexOf("</Register>") + 11;
				var registro = doc.substring(ini,fim);

				var assetCode = registro.substring( registro.indexOf("<Code>") + 6,registro.indexOf("</Code>") );
				var assetName = registro.substring( registro.indexOf("<Name>") + 6,registro.indexOf("</Name>") );

				var model = Alloy.createModel('ST9', {T9_FILIAL: '01', T9_CODBEM: assetCode,T9_NOME: assetName});

				// cria novo registro para o bem na collection ST9
				Alloy.Collections.ST9.add(model);

				doc = doc.substring(fim,doc.length);

			}

	    });
	} catch(e) {
	    Ti.API.error('Error: ' + e);
	}
}

/**
 * Efetua sincronismo da tabela de produtos com o ERP
 */
function SyncSB1() {

	var url = retCompleteURL() + "/NGMOBILE.apw";
	var operation = 'GETPRODUCT';
	var table_SB1 = Alloy.Collections.SB1; // instancia a tabela de produtos - SB1

	var suds = new SudsClient({
	    endpoint: url,
	    targetNamespace: 'http://webservices.totvs.com.br/fwwsmodel.apw'
	});

	try {

		Alloy.Globals.loading.show('Sincronizando tabela de produtos com o servidor...', false);

	    suds.invoke(operation, null, function(xmlDoc) {

			Alloy.Globals.loading.hide();

			Alloy.Collections.SB1.deleteAll();

			var doc = this.responseXML.documentElement.text;
			Ti.API.info("Preparando para adicionar SB1");
			Ti.API.info(doc);
			while( doc.indexOf("Register") > -1  ) {

				var ini = doc.indexOf("<Register>");
				var fim = doc.indexOf("</Register>") + 11;
				var registro = doc.substring(ini,fim);

				var productCode = registro.substring( registro.indexOf("<Code>") + 6,registro.indexOf("</Code>") );
				var productName = registro.substring( registro.indexOf("<Name>") + 6,registro.indexOf("</Name>") );

				var model = Alloy.createModel('SB1', {B1_FILIAL: '01', B1_COD: productCode,B1_DESC: productName});
			    
				// cria novo registro para o bem na collection SB1
				Alloy.Collections.SB1.add(model);
				
			    // save the model to persistent storage
			    model.save();
				
				//Ti.API.info("adicionando sb1 - " + productName);
				doc = doc.substring(fim,doc.length);

			}
			
			// reload SB1
			Alloy.Collections.SB1.fetch();

	    });
	} catch(e) {
	    Ti.API.error('Error: ' + e);
	}

}

/**
 * Invoca todas as funções de integração
 */
function AppSyncERP() {
	SyncST9(); // sincroniza bens
	SyncSB1(); // sincroniza produtos
}

/**
 * Função executada na inicialização do sistema
 */
function SystemLoad() {

	var parametros = Array();

	// TODO: Na primeira vez que entra no sistema deve abrir uma tela para configuração dos parametros de integração
	// e só deixa entrar no sistema se os parametros forem válidos
	parametros.push(Alloy.createModel('NGMOBILEPARAM', {VARIAVEL: 'MV_URLERP', CONTEUDO: '177.204.17.99',DESCRICAO: 'URL para integração com ERP Protheus'}));
	parametros.push(Alloy.createModel('NGMOBILEPARAM', {VARIAVEL: 'MV_PORTERP', CONTEUDO: '8085',DESCRICAO: 'Porta para integração com ERP Protheus'}));
	parametros.push(Alloy.createModel('NGMOBILEPARAM', {VARIAVEL: 'MV_SYNCINIC', CONTEUDO: 'S',DESCRICAO: 'Indica se deve sincronizar o aplicativo na inicialização, S para Sim e N para Não'}));

	// adiciona os parametros do array 'parametros' na collection NGMOBILEPARAM
	for (var i = 0 ; i<parametros.length ; i++){

		var param = parametros[i].get("VARIAVEL");

		// se não encontrar o parametro na base de dados então cria o mesmo
		if (!seekParam(param)) {
			Alloy.Collections.NGMOBILEPARAM.add(parametros[i]);
		}

	}

	// SINCRONISMO
	if ( ParamCont('MV_SYNCINIC') == 'S' ) {
		//AppSyncERP();
	}

}

/**
 * Retorna conteúdo do parametro informado no parametro
 */
function ParamCont(parametro) {

	for(var i=0; i<Alloy.Collections.NGMOBILEPARAM.length;i++) {
		if ( Alloy.Collections.NGMOBILEPARAM.at(i).get("VARIAVEL") == parametro ) {
			return Alloy.Collections.NGMOBILEPARAM.at(i).get("CONTEUDO");
		}
	}
	return "";
}

/**
 * Verifica se o parametro informado no argumento da função já existe
 */
function seekParam(parametro) {
	for(var i = 0 ; i<Alloy.Collections.NGMOBILEPARAM.length ; i++) {
		if(Alloy.Collections.NGMOBILEPARAM.at(i).get("VARIAVEL") == parametro) {
			return true;
		}
	}
	return false;
}

/**
 * Retorna URL completa de integração com ERP
 */
function retCompleteURL() {
	return 'http://' + ParamCont('MV_URLERP') + ':' + ParamCont('MV_PORTERP');
}