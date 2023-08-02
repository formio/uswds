"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formiojs_1 = require("formiojs");
var Radio_form_1 = require("./Radio.form");
var RadioComponent = formiojs_1.Components.components.radio;
RadioComponent.editForm = Radio_form_1.default;
var render = RadioComponent.prototype.render;
RadioComponent.prototype.render = function () {
    this.noField = true;
    return render.call(this);
};
exports.default = RadioComponent;
