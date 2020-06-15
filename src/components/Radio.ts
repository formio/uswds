import { Components } from 'formiojs';

const RadioComponent = Components.components.radio;

export default class USWDSRadioComponent extends RadioComponent {
  get noInputLabel() {
    return true;
  }
}
