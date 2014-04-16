var args = arguments[0] || {};
var modal = args.modal || null;

(function() {
    function updateScreen(e) {
       /* var elIndex = $.SignupWindow;
        //var elHeader = $.header;
        //var elLogo = $.logo;
        //var elBack = $.back;
        var elPassConfirm = $.passconfirm;
        var elPass = $.pass;
        var elConfirm = $.confirm;
        
        alert("updatescreen: "+e.orientation);
        switch(e.orientation) {
            case Ti.UI.PORTRAIT:
            	elIndex.applyProperties({
            		layout: 'vertical'
            	});
            	
            	// elHeader.applyProperties({
            		// width: Ti.UI.FILL,
            		// height: 54
            	// });
//             	
            	// elLogo.applyProperties({
            		// image: '/logoh.png',
                	// width: 190,
                	// height: 54
              	// });
//               	
              	// elBack.applyProperties({
              		// left: 8,
              		// top: 8
              	// });
              	
              	elPass.applyProperties({
              		width: Ti.UI.FILL
              	});
              	
              	elPassConfirm.applyProperties({
              		layout: 'vertical'
              	});
              	
              	elConfirm.applyProperties({
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
                	// height: 75
              	// });
              	
              	// elBack.applyProperties({
              		// left: 75,
              		// top: 44
              	// });
              	
              	elPass.applyProperties({
              		width: 160
              	});
              	
              	elPassConfirm.applyProperties({
              		layout: 'horizontal',
              		width: Ti.UI.FILL
              	});
              	
              	elConfirm.applyProperties({
              		width: 160
              	});
                break;
            
        }*/
    }
    
    Ti.Gesture.addEventListener('orientationchange', updateScreen);
    
    //$.signup.addEventListener('click', doSignup);
    //$.user.addEventListener('return', doSignup);
    //$.pass.addEventListener('return', doSignup);
    //$.confirm.addEventListener('return', doSignup);
    //$.back.addEventListener('click', closeSignup);
    
    updateScreen({orientation: Ti.Gesture.orientation});
    $.signupWin.open();
    $.user.focus();
})();

function closeSignup() {
    $.signupWin.close();
}

function doSignUp() {
    /*var xhr = Ti.Network.createHTTPClient({
        onload : function(e) {
            var message = 'Account created! You can now login!';
            if(modal)
                modal.alert(message);
            else
                alert(message);
            $.SignupWindow.close();
        },
        onerror : function(e) {
        	alert(this.responseText);
            var response = JSON.parse(this.responseText);
            
            var message = "Oops! Something went wrong!";
            if(response && response.message)
                message = response.message;
            
            if(modal)
                modal.alert(message);
            else
                alert(message);
        },
        timeout : 5000  // in milliseconds
    });
    // Prepare the connection.
    xhr.open("POST", Alloy.CFG.url + "/signup");
    var values = {
        user: $.user.value,
        pass: $.pass.value,
        confirm: $.confirm.value
    };
    xhr.send(JSON.stringify(values));*/
   
   $.signupWin.close();
}