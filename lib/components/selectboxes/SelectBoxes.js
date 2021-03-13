"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var formiojs_1 = require("formiojs");
var SelectBoxes_form_1 = require("./SelectBoxes.form");
var SelectBoxesComponent = formiojs_1.Components.components.selectboxes;
var USWDSSelectBoxesComponent = /** @class */ (function (_super) {
    __extends(USWDSSelectBoxesComponent, _super);
    function USWDSSelectBoxesComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    USWDSSelectBoxesComponent.editForm = SelectBoxes_form_1.default;
    return USWDSSelectBoxesComponent;
}(SelectBoxesComponent));
exports.default = USWDSSelectBoxesComponent;
