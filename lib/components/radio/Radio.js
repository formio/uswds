"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = require("@formio/js");
const Radio_form_1 = require("./Radio.form");
const RadioComponent = js_1.Components.components.radio;
RadioComponent.editForm = Radio_form_1.default;
const render = RadioComponent.prototype.render;
RadioComponent.prototype.render = function () {
    this.noField = true;
    return render.call(this);
};
exports.default = RadioComponent;
