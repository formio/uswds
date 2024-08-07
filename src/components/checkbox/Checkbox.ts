import { Components } from '@formio/js';
import editForm from './Checkbox.form';

const CheckboxComponent = Components.components.checkbox;

export default class USWDSCheckboxComponent extends CheckboxComponent {
  public noField;
  public static editForm = editForm;

  render(element) {
    this.noField = true;
    return super.render(element);
  }
}
