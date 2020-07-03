"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var ButtonComponent = formiojs_1.Components.components.button;
var FieldComponent = formiojs_1.Components.components.field;
var USWDSButtonComponent = /** @class */ (function (_super) {
    __extends(USWDSButtonComponent, _super);
    function USWDSButtonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    USWDSButtonComponent.prototype.getInputInfo = function () {
        var info = this.inputInfo;
        info.attr.class = 'usa-button';
        switch (this.component.theme) {
            case 'secondary':
                info.attr.class += ' usa-button--secondary';
                break;
            case 'info':
                info.attr.class += ' usa-button--accent-cool';
                break;
            case 'success':
                info.attr.class += ' usa-button--primary';
                break;
            case 'danger':
                info.attr.class += ' usa-button--secondary-vivid';
                break;
            case 'warning':
                info.attr.class += ' usa-button--accent-warm';
                break;
        }
        if (this.component.customClass) {
            info.attr.class += " " + this.component.customClass;
        }
        return info;
    };
    USWDSButtonComponent.prototype.render = function () {
        if (this.viewOnly || this.options.hideButtons) {
            this._visible = false;
        }
        return FieldComponent.prototype.render.call(this, this.renderTemplate('button', {
            component: this.component,
            input: this.getInputInfo(),
        }));
    };
    return USWDSButtonComponent;
}(ButtonComponent));
exports.default = USWDSButtonComponent;
