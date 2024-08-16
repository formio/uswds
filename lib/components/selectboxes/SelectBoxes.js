"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = require("@formio/js");
const SelectBoxes_form_1 = require("./SelectBoxes.form");
const SelectBoxesComponent = js_1.Components.components.selectboxes;
class USWDSSelectBoxesComponent extends SelectBoxesComponent {
}
exports.default = USWDSSelectBoxesComponent;
USWDSSelectBoxesComponent.editForm = SelectBoxes_form_1.default;
