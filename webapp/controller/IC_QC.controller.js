sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/odata/v2/ODataModel'
], function (Controller, JSONModel, ODataModel) {
    'use strict';
    return Controller.extend("sha.controller.IC_QC", {
        onInit: function () {

        },
        Add_Record: function (oEvent) {
            debugger;
            var sData = this.getOwnerComponent().getModel("IC").getData();
            var myCreate = this.getOwnerComponent().getModel();
            myCreate.create("/IndividualCustomerCollection", sData, {
                success: function (oSucc) {
                    debugger;
                },
                error: function (oErr) {
                    debugger;
                }
            })
        }
    })
});