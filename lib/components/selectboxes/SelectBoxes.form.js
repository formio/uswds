"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var formiojs_1 = require("formiojs");
var baseEditForm = formiojs_1.Components.components.selectboxes.editForm;
function default_1() {
    var extend = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        extend[_i] = arguments[_i];
    }
    return baseEditForm.apply(void 0, __spreadArray([[
            {
                key: 'display',
                components: [
                    {
                        type: 'checkbox',
                        input: true,
                        weight: 1000,
                        label: 'Tile view',
                        tooltip: 'Tile view for this component',
                        key: 'tileView',
                    },
                ],
            },
        ]], extend, false));
}
exports.default = default_1;
