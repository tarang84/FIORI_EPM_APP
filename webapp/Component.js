sap.ui.define(
	 ["sap/ui/core/UIComponent"],
	  function(UIComponent){
	  	  return UIComponent.extend("pcs.hr.payroll.Component",{
	  	    metadata: {
	  	    	manifest : "json"
	  	    },
	  	    init: function(){
	  	    	// Calling Base class Constructor to get benifits from
	  	    	// base class
	  	    	UIComponent.prototype.init.apply(this);
	  	    	
	  	    	var oRouter = this.getRouter();
	  	    	oRouter.initialize();
	  	    }
	  	    // createContent: function(){
	  	    // 	var oView = new sap.ui.view("idRoot",{
	  	    // 	  viewName : "tcs.hr.payroll.view.App",	
	  	    // 	  type : sap.ui.core.mvc.ViewType.XML
	  	    // 	});
	  	    // 	return oView;
	  	    //  }
	  	  	});
    	});