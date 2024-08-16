"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = require("@formio/js");
const Checkbox_form_1 = require("./Checkbox.form");
const CheckboxComponent = js_1.Components.components.checkbox;
class USWDSCheckboxComponent extends CheckboxComponent {
    render(element) {
        this.noField = true;
        return super.render(element);
    }
}
exports.default = USWDSCheckboxComponent;
USWDSCheckboxComponent.editForm = Checkbox_form_1.default;
