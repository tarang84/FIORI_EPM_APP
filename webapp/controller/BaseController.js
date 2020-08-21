sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/m/MessageToast"],
   function(Controller, MsgBox, MsgToast){
   	 return Controller.extend("pcs.hr.payroll.controller.BaseController", {
   	 	 MyConfirm: function(status){
        	  	if(status === 'OK'){
        	  		MsgToast.show("You order has been placed successfully");
        	  	}else{
        	  		MsgToast.show("Sorry You cancelled it");
        	  	}
       },
       MyRejection: function(status){
        	  	if(status === 'OK'){
        	  		MsgToast.show("You order has been cancelled");
        	  	}else{
        	  		MsgToast.show("Sorry You cancelled it");
        	  	}
       },
       printData: function(text){
       	 MsgBox.confirm(text);
       }
   	 });
   });