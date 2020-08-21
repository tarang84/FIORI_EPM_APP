sap.ui.define([
	"sap/ui/core/mvc/Controller", "pcs/hr/payroll/models/model"
], function(Controller, myModel) {
	"use strict";

	return Controller.extend("pcs.hr.payroll.controller.App", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf tcs.hr.payroll.view.App
		 */
			onInit: function() {
		      //step1: Create view1 object
		      //var oView1 = new sap.ui.view("idView1",{
		      //	  viewName: "tcs.hr.payroll.view.View1",
		      //	  type: sap.ui.core.mvc.ViewType.XML
		      //});
		      ////step2: Create view2 object
		      //var oView2 = new sap.ui.view("idView2",{
		      //	viewName: "tcs.hr.payroll.view.View2",
		      //	type: sap.ui.core.mvc.ViewType.XML
		      //});
		      
		      ////step2.1 : Create Empty view object
		      //var oViewEmpty = new sap.ui.view("idEmpty",{
		      //	viewName: "tcs.hr.payroll.view.Empty",
		      //	type: sap.ui.core.mvc.ViewType.XML
		      //});
		      
		            
		      //var oView3 = new sap.ui.view("idView3",{
		      //	viewName: "tcs.hr.payroll.view.View3",
		      //	type: sap.ui.core.mvc.ViewType.XML
		      //});
		      
		      ////step3: get the app container object
		      //var oApp = this.getView().byId("myApp");
		      ////step4: add both of our views to the app container
		      //oApp.addMasterPage(oView1).addDetailPage(oViewEmpty).addDetailPage(oView2).addDetailPage(oView3);
		      
		      //var oFruitModel = myModel.createFruitModel();
		      //this.getView().setModel(oFruitModel);
			}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf tcs.hr.payroll.view.App
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf tcs.hr.payroll.view.App
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf tcs.hr.payroll.view.App
		 */
		//	onExit: function() {
		//
		//	}

	});

});