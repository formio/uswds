"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Select_1 = require("./Select");
const Radio_1 = require("./radio/Radio");
const Button_1 = require("./button/Button");
const Checkbox_1 = require("./checkbox/Checkbox");
const SelectBoxes_1 = require("./selectboxes/SelectBoxes");
exports.default = {
    select: Select_1.default,
    radio: Radio_1.default,
    button: Button_1.default,
    checkbox: Checkbox_1.default,
    selectboxes: SelectBoxes_1.default
};
