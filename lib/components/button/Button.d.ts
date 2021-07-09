import editForm from './Button.form';
declare const ButtonComponent: import("formiojs").ClassWithEditForm<typeof import("formiojs/types/components/_classes/field/field").Field>;
export default class USWDSButtonComponent extends ButtonComponent {
    static editForm: typeof editForm;
    [x: string]: any;
    getInputInfo(): any;
    render(): any;
}
export {};
