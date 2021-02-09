"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formiojs_1 = require("formiojs");
var RadioComponent = formiojs_1.Components.components.radio;
var render = RadioComponent.prototype.render;
RadioComponent.prototype.render = function () {
    this.noField = true;
    return render.call(this);
};
exports.default = RadioComponent;
