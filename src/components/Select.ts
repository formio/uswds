import SelectComponent from 'formiojs/components/select/Select';
import SelectComponentForm from 'formiojs/components/select/Select.form';
export default class USWDSSelectComponent extends SelectComponent {
  choicesOptions() {
    const choicesOptions = super.choicesOptions();
    choicesOptions.classNames.containerOuter += ' usa-input';
    return choicesOptions;
  }
}

(USWDSSelectComponent as any).editForm = SelectComponentForm;
