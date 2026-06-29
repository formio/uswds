Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<ul class="editgrid-listgroup usa-list usa-list--unstyled">\n  ';
 if (ctx.header) { ;
__p += '\n  <li class="position-relative display-block padding-105 border">\n    ' +
((__t = (ctx.header)) == null ? '' : __t) +
'\n  </li>\n  ';
 } ;
__p += '\n  ';
 ctx.rows.forEach(function(row, rowIndex) { ;
__p += '\n  <li class="position-relative display-block padding-105 border" ref="' +
((__t = (ctx.editgridKey)) == null ? '' : __t) +
'">\n    ' +
((__t = (row)) == null ? '' : __t) +
'\n    ';
 if (ctx.openRows[rowIndex] && !ctx.readOnly) { ;
__p += '\n    <div class="editgrid-actions">\n      <button class="usa-button usa-button--accent-cool" ref="' +
((__t = (ctx.editgridKey)) == null ? '' : __t) +
'-saveRow">' +
((__t = (ctx.t(ctx.component.saveRow || 'Save'))) == null ? '' : __t) +
'</button>\n      ';
 if (ctx.component.removeRow) { ;
__p += '\n      <button class="usa-button usa-button--secondary" ref="' +
((__t = (ctx.editgridKey)) == null ? '' : __t) +
'-cancelRow">' +
((__t = (ctx.t(ctx.component.removeRow || 'Cancel'))) == null ? '' : __t) +
'</button>\n      ';
 } ;
__p += '\n    </div>\n    ';
 } ;
__p += '\n    <div class="usa-has-error">\n      <div class="editgrid-row-error text-base">\n        ' +
((__t = (ctx.errors[rowIndex])) == null ? '' : __t) +
'\n      </div>\n    </div>\n  </li>\n  ';
 }) ;
__p += '\n  ';
 if (ctx.footer) { ;
__p += '\n  <li class="position-relative display-block padding-105 border">\n    ' +
((__t = (ctx.footer)) == null ? '' : __t) +
'\n  </li>\n  ';
 } ;
__p += '\n</ul>\n';
return __p
}