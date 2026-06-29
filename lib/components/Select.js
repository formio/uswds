"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = require("@formio/js");
const SelectComponent = js_1.Components.components.select;
class USWDSSelectComponent extends SelectComponent {
    choicesOptions() {
        const choicesOptions = super.choicesOptions();
        choicesOptions.classNames.containerInner = [...choicesOptions.classNames.containerInner, 'usa-select', 'maxw-full'];
        return choicesOptions;
    }
}
exports.default = USWDSSelectComponent;
