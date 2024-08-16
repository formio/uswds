"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = require("@formio/js");
const baseEditForm = js_1.Components.components.selectboxes.editForm;
function default_1(...extend) {
    return baseEditForm([
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
    ], ...extend);
}
exports.default = default_1;
