

function openLeftWindow(){
	//Abre menu lateral esquerdo
	Alloy.Globals.drawer['toggleLeftWindow']();
}


function loadTableProdutos() {
	
	try {

		var SB1 = Alloy.Collections.SB1; // instancia a tabela de produtos - SB1
		alert(SB1.length);
		for(var i=0; i<SB1.length;i++) {

			var productCode = SB1.at(i).get("B1_COD");
			var productDescri = SB1.at(i).get("B1_DESC");
			var productBranch = SB1.at(i).get("B1_FILIAL");

			var myRow = Titanium.UI.createTableViewRow({
			    id: productBranch + productCode,
			    title: productCode +" - " + productDescri
			    // height: '100px',
			    // padding: '0px',
			    // width: '80%',
			});

			// indica status do bem
			// var online = Ti.UI.createImageView({
			  // image:'/online.png',
			  // left: 20,
			  // top: 5,
			  // zIndex: 5
			// });

			myRow.addEventListener( "click", function(e){
				alert("Código do produto: " + this.id );
			});

			/*var labelCodeName = Titanium.UI.createLabel({
			    text: "Bem: " + assetCode + " - " + assetName,
			    top: "7px",
			    height: "20px",
			    left: "75px",
			    right: "10px",
			    font: {
			        fontSize: "13px",
			        color: "#708090"
			    }
			});

			var labelFilial = Titanium.UI.createLabel({
			    text: "Filial: " + assetBranch,
			    top: "45px",
			    height: "20px",
			    left: "40px",
			    right: "10px",
			    font: {
			        fontSize: "13px",
			        color: "#708090"
			    }
			});

			myRow.add(labelCodeName);
			myRow.add(labelFilial);
			myRow.add(online);*/

			$.tblViewProdutos.appendRow(myRow);

		}

	} catch(e) {
	    Ti.API.error('Error: ' + e);
	}

}