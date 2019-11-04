Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<ul class="editgrid-listgroup usa-list usa-list--unstyled">\r\n  ';
 if (ctx.header) { ;
__p += '\r\n  <li class="position-relative display-block padding-105 border">\r\n    ' +
((__t = (ctx.header)) == null ? '' : __t) +
'\r\n  </li>\r\n  ';
 } ;
__p += '\r\n  ';
 ctx.rows.forEach(function(row, rowIndex) { ;
__p += '\r\n  <li class="position-relative display-block padding-105 border" ref="' +
((__t = (ctx.editgridKey)) == null ? '' : __t) +
'">\r\n    ' +
((__t = (row)) == null ? '' : __t) +
'\r\n    ';
 if (ctx.openRows[rowIndex] && !ctx.readOnly) { ;
__p += '\r\n    <div class="editgrid-actions">\r\n      <button class="usa-button usa-button--accent-cool" ref="' +
((__t = (ctx.editgridKey)) == null ? '' : __t) +
'-saveRow">' +
((__t = (ctx.t(ctx.component.saveRow || 'Save'))) == null ? '' : __t) +
'</button>\r\n      ';
 if (ctx.component.removeRow) { ;
__p += '\r\n      <button class="usa-button usa-button--secondary" ref="' +
((__t = (ctx.editgridKey)) == null ? '' : __t) +
'-cancelRow">' +
((__t = (ctx.t(ctx.component.removeRow || 'Cancel'))) == null ? '' : __t) +
'</button>\r\n      ';
 } ;
__p += '\r\n    </div>\r\n    ';
 } ;
__p += '\r\n    <div class="has-error">\r\n      <div class="editgrid-row-error text-base">\r\n        ' +
((__t = (ctx.errors[rowIndex])) == null ? '' : __t) +
'\r\n      </div>\r\n    </div>\r\n  </li>\r\n  ';
 }) ;
__p += '\r\n  ';
 if (ctx.footer) { ;
__p += '\r\n  <li class="position-relative display-block padding-105 border">\r\n    ' +
((__t = (ctx.footer)) == null ? '' : __t) +
'\r\n  </li>\r\n  ';
 } ;
__p += '\r\n</ul>\r\n';
 if (!ctx.readOnly && ctx.hasAddButton) { ;
__p += '\r\n<button class="usa-button" ref="' +
((__t = (ctx.editgridKey)) == null ? '' : __t) +
'-addRow">\r\n  <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t(ctx.component.addAnother || 'Add Another'))) == null ? '' : __t) +
'\r\n</button>\r\n';
 } ;
__p += '\r\n';
return __p
}