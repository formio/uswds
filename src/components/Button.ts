import { Components } from 'formiojs';

const ButtonComponent = Components.components.button;
const FieldComponent = Components.components.field;

export default class USWDSButtonComponent extends ButtonComponent {
  [x: string]: any;
  getInputInfo() {
    const info = this.inputInfo;
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
