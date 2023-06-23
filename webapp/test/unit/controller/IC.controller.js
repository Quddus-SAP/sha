/*global QUnit*/

sap.ui.define([
	"sha/controller/IC.controller"
], function (Controller) {
	"use strict";

	QUnit.module("IC Controller");

	QUnit.test("I should test the IC controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
