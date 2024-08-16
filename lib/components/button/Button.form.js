"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = require("@formio/js");
const baseEditForm = js_1.Components.components.button.editForm;
const Button_edit_display_1 = require("./editForm/Button.edit.display");
function default_1(...extend) {
    return baseEditForm([
        {
            key: 'display',
            components: Button_edit_display_1.default,
        },
    ], ...extend);
}
exports.default = default_1;
