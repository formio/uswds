import { Components } from 'formiojs';

const CheckboxComponent = Components.components.checkbox;

export default class USWDSCheckboxComponent extends CheckboxComponent {
  public noField;

  render(element) {
    this.noField = true;
    return super.render(element);
  }
}
