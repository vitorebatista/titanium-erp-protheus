function loadTableBens() {

	try {

		var ST9 = Alloy.Collections.ST9; // instancia a tabela de bens - ST9

		for(var i=0; i<ST9.length;i++) {

			var assetCode = ST9.at(i).get("T9_CODBEM");
			var assetName = ST9.at(i).get("T9_NOME");
			var assetBranch = ST9.at(i).get("T9_FILIAL");

			var myRow = Titanium.UI.createTableViewRow({
			    id: assetBranch+assetCode,
			    height: '100px',
			    padding: '0px',
			    width: '80%'
			});

			// indica status do bem
			var online = Ti.UI.createImageView({
			  image:'/online.png',
			  left: 20,
			  top: 5,
			  zIndex: 5
			});

			myRow.addEventListener( "click", function(e){
				alert("Código do bem: " + this.id );
			});

			var labelCodeName = Titanium.UI.createLabel({
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
			myRow.add(online);

			$.tblViewBens.appendRow(myRow);

		}

	} catch(e) {
	    Ti.API.error('Error: ' + e);
	}

}