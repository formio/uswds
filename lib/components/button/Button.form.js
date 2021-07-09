"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var formiojs_1 = require("formiojs");
var baseEditForm = formiojs_1.Components.components.button.editForm;
var Button_edit_display_1 = require("./editForm/Button.edit.display");
function default_1() {
    var extend = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        extend[_i] = arguments[_i];
    }
    return baseEditForm.apply(void 0, __spreadArray([[
            {
                key: 'display',
                components: Button_edit_display_1.default,
            },
        ]], extend));
}
exports.default = default_1;
