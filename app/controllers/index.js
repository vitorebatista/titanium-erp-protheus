(function() {
    function updateScreen(e) {
    /*    var elIndex = $.indexWin;
        //var elHeader = $.header;
        //var elLogo = $.logo;
        var elUserPass = $.userpass;
        var elUser = $.user;
        var elPass = $.pass;
        
        //alert("updatescreen: "+e.orientation);
        switch(e.orientation) {
            case Ti.UI.PORTRAIT:
            	elIndex.applyProperties({
            		layout: 'vertical'
            	});
            	
            	// elHeader.applyProperties({
            		// width: Ti.UI.FILL,
            		// height: 54
            	// });
            	
            	
            	// elLogo.applyProperties({
            		// image: '/logoh.png',
                	// width: 190,
                	// height: 54
              	// });
//               	
              	elUserPass.applyProperties({
              		layout: 'vertical'
              	});
              	
              	elUser.applyProperties({
              		width: Ti.UI.FILL
              	});
              	
              	elPass.applyProperties({
              		width: Ti.UI.FILL
              	});
                break;
                
            case Ti.UI.LANDSCAPE_LEFT:
            case Ti.UI.LANDSCAPE_RIGHT:
            	elIndex.applyProperties({
            		layout: 'horizontal'
            	});
            	
            	// elHeader.applyProperties({
            		// width: 120,
            		// height: Ti.UI.FILL
            	// });
//             	
            	// elLogo.applyProperties({
            		// image: '/logo.png',
                	// width: 120,
                	// height: 95
              	// });
              	
              	elUserPass.applyProperties({
              		layout: 'horizontal'
              	});
              	
              	elUser.applyProperties({
              		width: 160
              	});
              	
              	elPass.applyProperties({
              		width: 160
              	});
                break;
        }*/
    }
    
    
    
    function openSignup() {
        var args = {
            modal: $.modal
        };
        
        var signupWin = Alloy.createController('signup', args).getView('signupWin');
        signupWin.open();
    }
    
    Ti.Gesture.addEventListener('orientationchange', updateScreen);
    
    //$.login.addEventListener('click', doLogin);
    $.user.addEventListener('return', doLogin);
    $.pass.addEventListener('return', doLogin);
    $.signupLabel.addEventListener('click', openSignup);
    
    updateScreen({orientation: Ti.Gesture.orientation});
        
    $.indexWin.open();
   // $.user.focus();
})();

function doLogin() {
        Ti.API.log('Doing login...');
        
        /*var xhr = Ti.Network.createHTTPClient({
            onload : function(e) {
                var response = JSON.parse(this.responseText);
                var args = {
                    modal: $.modal
                };
                var mapWin = Alloy.createController('map', args).getView('MapWindow');
                mapWin.open();
            },
            onerror : function(e) {
                var response = JSON.parse(this.responseText);
                
                if(response && response.message) {
                    $.modal.alert(response.message);
                } else {
                    $.modal.alert("Oops! Something went wrong!");
                    Ti.API.error(this.responseText);
                }
            },
            timeout : 30000  // in milliseconds
        });
        // Prepare the connection.
        xhr.open("POST", Alloy.CFG.url + "/login");
        var values = {
            user: $.user.value,
            pass: $.pass.value
        };
        xhr.send(JSON.stringify(values));*/
        var args = {
            modal: $.modal
        };
		var mainWin = Alloy.createController('main', args).getView('drawer');
		$.indexWin.close();
		mainWin.open();
    }