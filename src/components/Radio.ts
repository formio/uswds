import RadioComponent from 'formiojs/components/radio/Radio';
import RadioComponentForm from 'formiojs/components/radio/Radio.form';
export default class USWDSRadioComponent extends RadioComponent {
  get noInputLabel() {
    return true;
  }
}

(USWDSRadioComponent as any).editForm = RadioComponentForm;
