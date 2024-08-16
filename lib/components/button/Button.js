"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = require("@formio/js");
const Button_form_1 = require("./Button.form");
const ButtonComponent = js_1.Components.components.button;
const FieldComponent = js_1.Components.components.field;
class USWDSButtonComponent extends ButtonComponent {
    getInputInfo() {
        const info = this.inputInfo;
        info.attr.class = 'usa-button';
        switch (this.component.theme) {
            case 'secondary':
                info.attr.class += ' usa-button--secondary';
                break;
            case 'info':
            case 'accent-cool':
                info.attr.class += ' usa-button--accent-cool';
                break;
            case 'success':
                info.attr.class += ' bg-green';
                break;
            case 'danger':
                info.attr.class += ' bg-secondary-vivid';
                break;
            case 'warning':
                info.attr.class += ' usa-button--accent-warm';
                break;
            case 'base':
                info.attr.class += ' usa-button--base';
                break;
            case 'outline':
                info.attr.class += ' usa-button--outline';
                break;
        }
        if (this.component.customClass) {
            info.attr.class += ` ${this.component.customClass}`;
        }
        return info;
    }
    render() {
        if (this.viewOnly || this.options.hideButtons) {
            this._visible = false;
        }
        return FieldComponent.prototype.render.call(this, this.renderTemplate('button', {
            component: this.component,
            input: this.getInputInfo(),
        }));
    }
}
exports.default = USWDSButtonComponent;
USWDSButtonComponent.editForm = Button_form_1.default;
