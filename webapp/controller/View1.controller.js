sap.ui.define([
	"sap/ui/core/mvc/Controller", "sap/ui/model/Filter", "sap/ui/model/FilterOperator"
], function(Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("pcs.hr.payroll.controller.View1", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf tcs.hr.payroll.view.View1
		 */
			onInit: function() {
		       this.oRouter = this.getOwnerComponent().getRouter();
		       this.oRouter.attachRoutePatternMatched(this.setItm, this);
			},
			
			setItm: function(oEvent){
			 	var fruitId = oEvent.getParameter("arguments").fruitId;
			 	var index = oEvent.getParameter("arguments").index;
			 	
			 	var oItem = this.getView().byId("idList").getItems()[index];
			 	
			 	this.getView().byId("idList").setSelectedItem(oItem, true);
			},

           onAdd: function(){
           	 this.oRouter.navTo("add");
           },
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf tcs.hr.payroll.view.View1
		 */
		//	onBeforeRendering: function() {
		//
		//	},
        onNext: function(Element, Index){
        	//step 1: Obtain app object
        	//var oApp = this.getView().getParent().getParent();
        	//step 2: ask app object to navigate second view
        	//oApp.toDetail("idView2");
        	
        	var MyFruit = Element.split("/")[Element.split("/").length - 1];
        	this.oRouter.navTo("detail", {
        		fruitId : MyFruit,
        		index : Index
        	});
        } ,
        onDelete: function(oEvent){
        	var oItemToBeDeleted = oEvent.getParameter("listItem");
        	var oList =oEvent.getSource();
        	oList.removeItem(oItemToBeDeleted);
        },
        onSearch: function(oEvent){
        	var SearchVal = oEvent.getParameter("query");
        	if(!SearchVal){
        		SearchVal = oEvent.getParameter("newValue");
        	}
        	var oFilterNam = new Filter("CATEGORY", FilterOperator.Contains , SearchVal);
        	// var oFilterCat = new Filter("type", FilterOperator.Contains , SearchVal );
        	// var oFilter = new Filter({
        	//  filters:[oFilterNam, oFilterCat],
        	//  OR: true
        	//  //AND: false
        	// });
        //	var aFilter = [oFilter];
        	var oList = this.getView().byId("idList");
        	oList.getBinding("items").filter(oFilterNam);
        },
        onItemPress: function(oEvent){
        	var oSelectedItem = oEvent.getParameter("listItem");
        	
        	var oIndex = this.getView().byId("idList").indexOfItem(oSelectedItem);
        	var oElement = oSelectedItem.getBindingContextPath();
        	
         //   var oView2 = this.getView().getParent().getParent().getDetailPages()[1];
        	// oView2.bindElement(oElement);
        	
        	this.onNext(oElement, oIndex);
        }
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf tcs.hr.payroll.view.View1
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf tcs.hr.payroll.view.View1
		 */
		//	onExit: function() {
		//
		//	}

	});

});