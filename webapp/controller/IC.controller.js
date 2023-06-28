sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("sha.controller.IC", {
            onInit: function () {
                this.oRouter = this.getOwnerComponent().getRouter();
            },
            QuickCreate: function(oEvent){
                var oModel = new JSONModel();
                this.getOwnerComponent().setModel(oModel,"IC");
                this.oRouter.navTo("RouteIC_QC");
            }
        });
    });
