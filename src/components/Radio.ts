import RadioComponent from 'formiojs/components/radio/Radio';
export default class USWDSRadioComponent extends RadioComponent {
  get noInputLabel() {
    return true;
  }
}
