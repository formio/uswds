import SelectComponent from 'formiojs/components/select/Select';
export default class USWDSSelectComponent extends SelectComponent {
  choicesOptions() {
    const choicesOptions = super.choicesOptions();
    choicesOptions.classNames.containerOuter += ' usa-input';
    return choicesOptions;
  }
}
