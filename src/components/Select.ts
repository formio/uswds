import { Components } from '@formio/js';

const SelectComponent = Components.components.select as any;

export default class USWDSSelectComponent extends SelectComponent {
  choicesOptions() {
    const choicesOptions = super.choicesOptions();
    choicesOptions.classNames.containerInner += ' usa-select maxw-full';
    return choicesOptions;
  }
}
