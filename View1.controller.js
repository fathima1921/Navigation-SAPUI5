sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("databindingnavigation.controller.View1", {
        
            submit: function() {
                oRouter.navTo("page1",{
                    firstName: sFirstName,
                    lastName: sLastName
                    
                });
                            
              }
        });
    });
