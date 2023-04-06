sap.ui.define([
	"sap/ui/core/mvc/Controller"
],function(
	Controller
) {
	"use strict";

	return Controller.extend("databindingnavigation.controller.page1", {
        onInit : function()  {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getRoute("page1").attachpatternMatched(this._onObjectMatched,this)
        },
        _onObjectMatched: function(oEvent){
            var firstName = oEvent.getParameter("arguments").firstName;
            var lastName = oEvent.getParameter("arguments").lastName;
        }
          
	});
});