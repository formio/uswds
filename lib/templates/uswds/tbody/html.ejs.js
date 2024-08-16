Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table>\n<tbody ref="tbody">\n  ';
 ctx.eachRow(function(row) { ;
__p += '\n  <tr ref="row" scope="row">\n      ';
 if (ctx.component.enableRowSelect) { ;
__p += '\n      <td style="text-align: center">\n          <input type="checkbox" ref="selectRow" title="select row">\n      </td>\n      ';
 } ;
__p += '\n    ';
 row.forEach(function(rowComp) { ;
__p += '\n      ';
 if (rowComp.component.show) { ;
__p += '\n      <td\n        ' +
((__t = ( ctx.component.cellMaxWidth ? 'style="max-width:'+ ctx.component.cellMaxWidth + ';"' : '')) == null ? '' : __t) +
'\n        ' +
((__t = ( ctx.component.clipCells ? 'class="clip"' : '')) == null ? '' : __t) +
'>\n          ' +
((__t = ( ctx.instance.hook('format', rowComp.component.key, rowComp.dataValue) )) == null ? '' : __t) +
'\n      </td>\n      ';
 } ;
__p += '\n    ';
 }); ;
__p += '\n    ';
 if ((ctx.component.showEditBtn || ctx.component.showDeleteBtn || ctx.component.showDeleteAllBtn) && !ctx.options.pdf) { ;
__p += '\n    <th class="formio-grid-ops formio-actions-col position-sticky" style="height: inherit;">\n      <div tabindex="0" class="row-menu-btn" style="height: 100%;">\n        <div class="dropdown" ref="menu">\n          <ul class="dropdown-menu padding-0" ref="dropdown">\n            ';
 if (ctx.component.showEditBtn) { ;
__p += '\n            <li class="dropdown-item" ref="editRow">\n              <span class="formio-grid-ops-button" style="padding: 2px; font-size: 10px; line-height: 1.2em; width: 18px;">&#9999;</span>\n              Edit row\n            </li>\n            ';
 } ;
__p += '\n            ';
 if (ctx.component.showDeleteBtn) { ;
__p += '\n            <li class="dropdown-item ' +
((__t = ( ctx.options.readOnly ? 'disabled' : '' )) == null ? '' : __t) +
'" ref="deleteRow">\n              <span class="formio-grid-ops-button" style="padding: 2px; font-size: 14px; line-height: 1.2em; width: 18px;">\n                <i class="fa fa-trash" aria-hidden="true"></i>\n              </span>\n              Delete row\n            </li>\n            ';
 } ;
__p += '\n          </ul>\n        </div>\n        ⋮\n      </div>\n    </th>\n    ';
 } ;
__p += '\n  </tr>\n  ';
 }); ;
__p += '\n</tbody>\n</table>\n';
return __p
}