sap.ui.define([
	"pcs/hr/payroll/controller/BaseController",
	"sap/m/MessageBox", "sap/ui/model/Filter", "sap/ui/model/FilterOperator"], 
	function(Controller, MsgBox, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("pcs.hr.payroll.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf tcs.hr.payroll.view.View2
		 */
		onInit: function() {
		    this.oRouter = this.getOwnerComponent().getRouter();
		    this.oRouter.attachRoutePatternMatched(this.hercules, this);
			},
			
	    hercules: function(oEvent){
	    	var fruitId = oEvent.getParameter("arguments").fruitId;
	    	var Spath = '/' + fruitId;

	      this.getView().bindElement({
	 	            path: Spath,
	                parameters:{
	  	              expand: "ToSupplier"
 	                }
              	});
          this.getView().byId("SuppData").bindElement("ToSupplier");   	
          this.getView().byId("img1").setSrc("/sap/opu/odata/sap/ZODATA_F_SRV" + Spath + "/$value");
	    },
	    
        onApprove: function(){
        	MsgBox.confirm("Do you wish to order this item ?", {
        	  title:"Confirm to Seller",
        	  onClose: this.MyConfirm
        	});
        },
        onReject: function(){
          MsgBox.confirm("Do you wish to cancel this item ?", {
        	  title:"Confirm to Seller",
        	  onClose: this.MyRejection
        	});
        },
        onDropDownChange: function(oEvent){
        	this.printData(oEvent.getSource().getSelectedKey());
        },
        onMulti: function(oEvent){
        	var oMulti = oEvent.getSource();
        	var allItems = oMulti.getSelectedItems();
        	var allData= "";
        	for(var i=0; i<allItems.length; i++){
        		allData = allData + "," + allItems[i].getKey();
        	}
        	this.printData(allData);
        },
        onEnter: function(){
        	this.printData("Enter");
        },
        onItemPress: function(oEvent){
          var SelectedItem = oEvent.getParameter("listItem");
          var Element = SelectedItem.getBindingContextPath();
          	
          var oView3 = this.getView().getParent().getParent().getDetailPages()[2];	
          oView3.bindElement(Element);
          
          this.onNext();
        },
        
        onNext: function(){
           var oSplitApp = this.getView().getParent().getParent();	
           oSplitApp.toDetail("idView3");
        },
        oFragFilter: null,
        oFragCity: null,
        Inpfield: null,
        onItemSelect: function(oEvent){
        	var allItems = oEvent.getParameter("selectedItems");
        	if(allItems.length > 1){
        	  var oTable = this.getView().byId("suptab");	
        	  var aFilter = [];
        	  for (var i=0; i<allItems.length; i++){
        	  aFilter.push(new Filter("name", FilterOperator.EQ, allItems[i].getLabel()));
        	  }
        	  var oFilter = new Filter({
        	  	filters: aFilter,
        	  	and: false
        	  });
        	  oTable.getBinding("items").filter([oFilter]);                         
        	}else{
        	var SelItemTitle = oEvent.getParameter("selectedItem").getLabel();
        	this.Inpfield.setValue(SelItemTitle);
        	}
        },
        
        onFilter: function(){
        	if(!this.oFragFilter){
        	  this.oFragFilter = new sap.ui.xmlfragment("idFilter", "pcs.hr.payroll.fragments.popup", this );
        	  // Add as dependant to give access of model
        	  this.getView().addDependent(this.oFragFilter);
        	  this.oFragFilter.bindAggregation("items",{
        	  path: '/supplier',
        	  template: new sap.m.DisplayListItem({
        	  	label: "{name}",
        	  	value: "{city}"
        	  })
        	});
        	}
        	this.oFragFilter.open();
        },
       
        onF4Help: function(oEvent){
        	this.Inpfield = oEvent.getSource();
        	if(!this.oFragCity){
        	 this.oFragCity = new sap.ui.xmlfragment("idCity", "pcs.hr.payroll.fragments.popup", this);
        	  // Give access of Model to Fragment(child of view)
        	  this.getView().addDependent(this.oFragCity);
        	  this.oFragCity.bindAggregation("items",{
        	    path: '/cities',
        	    template: new sap.m.DisplayListItem({
        	      label: "{name}",
        	      value: "{state}"
        	    })
        	  });
        	  this.oFragCity.setMultiSelect(false);
        	}
        	this.oFragCity.open();
        },
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf tcs.hr.payroll.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},
        onBack: function(){
        	//step1: get app object
        	//var oSplitApp = this.getView().getParent().getParent();
        	//step2: ask app object to navigate to another view
        	//oSplitApp.toDetail("idEmpty");
        }
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf tcs.hr.payroll.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf tcs.hr.payroll.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});