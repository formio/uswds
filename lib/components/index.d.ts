import USWDSSelectComponent from './Select';
import USWDSButtonComponent from './Button';
import USWDSCheckboxComponent from './Checkbox';
declare const _default: {
    select: typeof USWDSSelectComponent;
    radio: import("formiojs").ClassWithEditForm<typeof import("formiojs/types/components/_classes/field/field").Field>;
    button: typeof USWDSButtonComponent;
    checkbox: typeof USWDSCheckboxComponent;
};
export default _default;
