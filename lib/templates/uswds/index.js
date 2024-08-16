"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = require("./address");
const alert_1 = require("./alert");
const builder_1 = require("./builder");
const builderComponent_1 = require("./builderComponent");
const builderComponents_1 = require("./builderComponents");
const builderEditForm_1 = require("./builderEditForm");
const builderPlaceholder_1 = require("./builderPlaceholder");
const builderSidebar_1 = require("./builderSidebar");
const builderSidebarGroup_1 = require("./builderSidebarGroup");
const builderWizard_1 = require("./builderWizard");
const button_1 = require("./button");
const checkbox_1 = require("./checkbox");
const columns_1 = require("./columns");
const component_1 = require("./component");
const componentModal_1 = require("./componentModal");
const container_1 = require("./container");
const datagrid_1 = require("./datagrid");
const datatable_1 = require("./datatable");
const day_1 = require("./day");
const dialog_1 = require("./dialog");
const editgrid_1 = require("./editgrid");
const errorsList_1 = require("./errorsList");
const field_1 = require("./field");
const fieldset_1 = require("./fieldset");
const file_1 = require("./file");
const html_1 = require("./html");
const icon_1 = require("./icon");
const input_1 = require("./input");
const label_1 = require("./label");
const loader_1 = require("./loader");
const loading_1 = require("./loading");
const message_1 = require("./message");
const modalPreview_1 = require("./modalPreview");
const multiValueRow_1 = require("./multiValueRow");
const multiValueTable_1 = require("./multiValueTable");
const panel_1 = require("./panel");
const pdf_1 = require("./pdf");
const pdfBuilder_1 = require("./pdfBuilder");
const pdfBuilderUpload_1 = require("./pdfBuilderUpload");
const radio_1 = require("./radio");
const resourceAdd_1 = require("./resourceAdd");
const select_1 = require("./select");
const selectOption_1 = require("./selectOption");
const survey_1 = require("./survey");
const tab_1 = require("./tab");
const table_1 = require("./table");
const warning_1 = require("./warning");
const webform_1 = require("./webform");
const well_1 = require("./well");
const wizard_1 = require("./wizard");
const wizardHeader_1 = require("./wizardHeader");
const wizardNav_1 = require("./wizardNav");
const size_1 = require("./size");
const cssClasses_1 = require("./cssClasses");
exports.default = {
    transform(type, text) {
        if (!text) {
            return text;
        }
        switch (type) {
            case 'class':
                return this.cssClasses.hasOwnProperty(text.toString()) ? this.cssClasses[text.toString()] : text;
        }
        return text;
    },
    address: address_1.default,
    alert: alert_1.default,
    builder: builder_1.default,
    builderComponent: builderComponent_1.default,
    builderComponents: builderComponents_1.default,
    builderEditForm: builderEditForm_1.default,
    builderPlaceholder: builderPlaceholder_1.default,
    builderSidebar: builderSidebar_1.default,
    builderSidebarGroup: builderSidebarGroup_1.default,
    builderWizard: builderWizard_1.default,
    button: button_1.default,
    checkbox: checkbox_1.default,
    columns: columns_1.default,
    component: component_1.default,
    componentModal: componentModal_1.default,
    container: container_1.default,
    datagrid: datagrid_1.default,
    datatable: datatable_1.default,
    day: day_1.default,
    dialog: dialog_1.default,
    editgrid: editgrid_1.default,
    errorsList: errorsList_1.default,
    field: field_1.default,
    fieldset: fieldset_1.default,
    file: file_1.default,
    html: html_1.default,
    icon: icon_1.default,
    input: input_1.default,
    label: label_1.default,
    loader: loader_1.default,
    loading: loading_1.default,
    message: message_1.default,
    modalPreview: modalPreview_1.default,
    multiValueRow: multiValueRow_1.default,
    multiValueTable: multiValueTable_1.default,
    panel: panel_1.default,
    pdf: pdf_1.default,
    pdfBuilder: pdfBuilder_1.default,
    pdfBuilderUpload: pdfBuilderUpload_1.default,
    radio: radio_1.default,
    resourceAdd: resourceAdd_1.default,
    select: select_1.default,
    selectOption: selectOption_1.default,
    survey: survey_1.default,
    tab: tab_1.default,
    table: table_1.default,
    warning: warning_1.default,
    webform: webform_1.default,
    well: well_1.default,
    wizard: wizard_1.default,
    wizardHeader: wizardHeader_1.default,
    wizardNav: wizardNav_1.default,
    size: size_1.default,
    cssClasses: cssClasses_1.default,
};
