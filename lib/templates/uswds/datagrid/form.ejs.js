Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table\r\n  class="usa-table datagrid-table"\r\n  ';
 if (ctx.component.layoutFixed) { ;
__p += 'style="table-layout: fixed;"';
 } ;
__p += '\r\n>\r\n  ';
 if (ctx.hasHeader) { ;
__p += '\r\n  <thead>\r\n    <tr>\r\n      ';
 ctx.columns.forEach(function(col) { ;
__p += '\r\n        <th scope="col" class="' +
((__t = (col.validate && col.validate.required ? 'field-required' : '')) == null ? '' : __t) +
'">\r\n          ' +
((__t = ( col.hideLabel ? '' : ctx.t(col.label || col.title) )) == null ? '' : __t) +
'\r\n          ';
 if (col.tooltip) { ;
__p += ' <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-base"></i>';
 } ;
__p += '\r\n        </th>\r\n      ';
 }) ;
__p += '\r\n      ';
 if (ctx.hasExtraColumn) { ;
__p += '\r\n      <th scope="col">\r\n        ';
 if (!ctx.builder && ctx.hasAddButton && ctx.hasTopSubmit) { ;
__p += '\r\n        <button class="usa-button formio-button-add-row" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-addRow">\r\n          <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i>' +
((__t = (ctx.t('Add Another'))) == null ? '' : __t) +
'\r\n        </button>\r\n        ';
 } ;
__p += '\r\n      </th>\r\n      ';
 } ;
__p += '\r\n    </tr>\r\n  </thead>\r\n  ';
 } ;
__p += '\r\n  <tbody ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-tbody">\r\n    ';
 ctx.rows.forEach(function(row, index) { ;
__p += '\r\n    ';
 if (ctx.hasGroups && ctx.groups[index]) { ;
__p += '\r\n    <tr ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-group-header" class="datagrid-group-header' +
((__t = (ctx.hasToggle ? ' clickable' : '')) == null ? '' : __t) +
'">\r\n      <td\r\n        ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-group-label"\r\n        colspan="' +
((__t = (ctx.numColumns)) == null ? '' : __t) +
'"\r\n        class="datagrid-group-label">' +
((__t = (ctx.groups[index].label)) == null ? '' : __t) +
'</td>\r\n    </tr>\r\n    ';
 } ;
__p += '\r\n    <tr ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-row">\r\n      ';
 ctx.columns.forEach(function(col) { ;
__p += '\r\n        <td ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'">\r\n          ' +
((__t = (row[col.key])) == null ? '' : __t) +
'\r\n        </td>\r\n      ';
 }) ;
__p += '\r\n      ';
 if (ctx.hasExtraColumn) { ;
__p += '\r\n        ';
 if (!ctx.builder && ctx.hasRemoveButtons) { ;
__p += '\r\n        <td>\r\n          <button type="button" class="usa-button usa-button--secondary formio-button-remove-row" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-removeRow">\r\n            <i class="' +
((__t = (ctx.iconClass('remove-circle'))) == null ? '' : __t) +
'"></i>\r\n          </button>\r\n        </td>\r\n        ';
 } ;
__p += '\r\n        ';
 if (ctx.builder) { ;
__p += '\r\n        <td ref="' +
((__t = (ctx.key)) == null ? '' : __t) +
'-container">\r\n          ' +
((__t = (ctx.placeholder)) == null ? '' : __t) +
'\r\n        </td>\r\n        ';
 } ;
__p += '\r\n      ';
 } ;
__p += '\r\n    </tr>\r\n    ';
 }) ;
__p += '\r\n  </tbody>\r\n  ';
 if (!ctx.builder && ctx.hasAddButton && ctx.hasBottomSubmit) { ;
__p += '\r\n  <tfoot>\r\n    <tr>\r\n      <td colspan="' +
((__t = (ctx.numColumns + 1)) == null ? '' : __t) +
'">\r\n        <button class="usa-button formio-button-add-row" ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'-addRow">\r\n          <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t(ctx.component.addAnother || 'Add Another'))) == null ? '' : __t) +
'\r\n        </button>\r\n      </td>\r\n    </tr>\r\n  </tfoot>\r\n  ';
 } ;
__p += '\r\n</table>\r\n';
return __p
}