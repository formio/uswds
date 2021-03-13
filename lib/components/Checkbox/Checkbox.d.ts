import editForm from './Checkbox.form';
declare const CheckboxComponent: import("formiojs").ClassWithEditForm<typeof import("formiojs/types/components/_classes/field/field").Field>;
export default class USWDSCheckboxComponent extends CheckboxComponent {
    noField: any;
    static editForm: typeof editForm;
    render(element: any): any;
}
export {};
