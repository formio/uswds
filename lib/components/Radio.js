"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var formiojs_1 = require("formiojs");
var RadioComponent = formiojs_1.Components.components.radio;
var USWDSRadioComponent = /** @class */ (function (_super) {
    __extends(USWDSRadioComponent, _super);
    function USWDSRadioComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(USWDSRadioComponent.prototype, "noInputLabel", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    return USWDSRadioComponent;
}(RadioComponent));
exports.default = USWDSRadioComponent;
