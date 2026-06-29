Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div ref="tableContainer"></div>\n<div class="formio-component-modal-wrapper formio-component-modal-wrapper-' +
((__t = ( ctx.component.type )) == null ? '' : __t) +
'" ref="componentModalWrapper">\n  <div class="formio-dialog formio-dialog-theme-default component-rendering-hidden" ref="dataTableModalWrapper">\n    <div class="formio-dialog-overlay" ref="dataTableModalOverlay"></div>\n    <div class="formio-dialog-content" ref="dataTableModalContents">\n      <div ref="dataTableModalContents">\n        <div class="editgrid-listgroup">\n          ';
 if (ctx.header) { ;
__p += '\n          <div>\n            ' +
((__t = (ctx.header)) == null ? '' : __t) +
'\n          </div>\n          ';
 } ;
__p += '\n          ';
 ctx.rows.forEach(function(row, rowIndex) { ;
__p += '\n          <div class="margin-bottom-1" ref="' +
((__t = (ctx.ref.row)) == null ? '' : __t) +
'">\n            ' +
((__t = (row)) == null ? '' : __t) +
'\n            ';
 if (ctx.openRows[rowIndex] && !ctx.readOnly) { ;
__p += '\n            <div class="editgrid-actions">\n              <button class="usa-button usa-button--accent-cool" ref="' +
((__t = (ctx.ref.saveRow)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.saveRow || 'Save'))) == null ? '' : __t) +
'</button>\n              ';
 if (ctx.component.removeRow) { ;
__p += '\n              <button class="usa-button usa-button--secondary" ref="' +
((__t = (ctx.ref.cancelRow)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.removeRow || 'Cancel'))) == null ? '' : __t) +
'</button>\n              ';
 } ;
__p += '\n            </div>\n            ';
 } ;
__p += '\n            <div class="usa-has-error">\n              <div class="editgrid-row-error text-base">\n                ' +
((__t = (ctx.errors[rowIndex])) == null ? '' : __t) +
'\n              </div>\n            </div>\n          </div>\n          ';
 }) ;
__p += '\n        </div>\n      </div>\n      <button class="formio-dialog-close float-right" aria-label="close" ref="dataTableModalClose"></button>\n    </div>\n  </div>\n</div>\n';
return __p
}