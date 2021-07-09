import USWDSSelectComponent from './Select';
import USWDSButtonComponent from './button/Button';
import USWDSCheckboxComponent from './Checkbox/Checkbox';
import USWDSSelectBoxesComponent from './selectboxes/SelectBoxes';
declare const _default: {
    select: typeof USWDSSelectComponent;
    radio: import("formiojs").ClassWithEditForm<typeof import("formiojs/types/components/_classes/field/field").Field>;
    button: typeof USWDSButtonComponent;
    checkbox: typeof USWDSCheckboxComponent;
    selectboxes: typeof USWDSSelectBoxesComponent;
};
export default _default;
