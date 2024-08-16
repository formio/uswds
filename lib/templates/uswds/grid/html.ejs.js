Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="data-grid-wrapper data-grid-uswds-wrapper">\r\n  <div class="data-grid">\r\n    <span class="menu-container">\r\n      <div class="dropdown" ref="menu"></div>\r\n    </span>\r\n    <div style="position: relative; max-width: 86vw; display: flex; align-items: center; justify-content: space-between">\r\n        ';
 if (ctx.component.enableRowSelect) { ;
__p += '\r\n        <div style="min-height: 20px" >\r\n            ';
 if (ctx.selectedRows) { ;
__p += '\r\n            <span style=" font-size: 13px">' +
((__t = (ctx.selectedRows)) == null ? '' : __t) +
' selected</span>\r\n            ';
 } ;
__p += '\r\n        </div>\r\n        ';
 } ;
__p += '\r\n        <div ref="pagination" class="formio-pagination" style="margin-left: auto"></div>\r\n    </div>\r\n    <div class="usa-table-container--scrollable margin-y-1">\r\n      <div class="spinner-wrapper" ref="loader">\r\n        <div class="spinner-grow"></div>\r\n      </div>\r\n      <table class="formio-grid ' +
((__t = ( ctx.classes )) == null ? '' : __t) +
' usa-table">\r\n        <thead>\r\n          <tr>\r\n            ';
 if (!ctx.component.components.length) { ;
__p += '\r\n              <th>No components have been set up to display in the Data Table. "Table View" must be checked for components to render.</th>\r\n            ';
 } ;
__p += '\r\n              ';
 if (ctx.component.enableRowSelect) { ;
__p += '\r\n              <th style="width: 2rem" scope="col" role="columnheader">\r\n                  <input type="checkbox" name="selectAll" id="selectAll" ref="selectAll" title="select All" ' +
((__t = (ctx.selectedAll && 'checked')) == null ? '' : __t) +
' >\r\n                  <span style="display: none">(' +
((__t = (ctx.selectedRows)) == null ? '' : __t) +
' of <span ref="totalRows"></span>)</span>\r\n              </th>\r\n              ';
 } ;
__p += '\r\n            ';
 ctx.component.components.forEach(function(comp, i) { ;
__p += '\r\n              ';
 if (comp.show) { ;
__p += '\r\n              <th scope="col" role="columnheader" class="text-center">\r\n                <span>' +
((__t = ( comp.label || comp.key )) == null ? '' : __t) +
'</span>\r\n                ';
 if (ctx.options.sortable && comp.sortable) { ;
__p += '\r\n                <span class="sort-btn ' +
((__t = ( (ctx.component.sort.key === comp.key || ctx.component.sort.key === comp.columnQueryProperty) ? 'sorted' : '' )) == null ? '' : __t) +
'" ref="sort">\r\n                  ' +
((__t = ( ctx.component.sort.isAsc ? '↑' : '↓' )) == null ? '' : __t) +
'\r\n                </span>\r\n                ';
 } ;
__p += '\r\n                <span class="menu">\r\n                  <div class="menu-container">\r\n                    <span class="menu-btn' +
((__t = ( (ctx.component.filters[comp.key] || ctx.component.filters[comp.columnQueryProperty]) ? ' filters-applied' : '' )) == null ? '' : __t) +
'" ref="menuBtn">⋮</span>\r\n                  </div>\r\n                </span>\r\n              </th>\r\n              ';
 } ;
__p += '\r\n            ';
 }); ;
__p += '\r\n            ';
 if ((ctx.component.showEditBtn || ctx.component.showDeleteBtn || ctx.component.showDeleteAllBtn) 
              && ctx.data.length
              && !ctx.options.pdf) { ;
__p += '\r\n            <th class="formio-grid-ops position-sticky padding-0 border-left-0" style="background-color: white; ">\r\n              <div class="text-center">\r\n                <span>Actions</span>\r\n                ';
 if (ctx.component.showDeleteAllBtn && ctx.data.length) { ;
__p += '\r\n                <button class="usa-button delete-all-btn ' +
((__t = ( ctx.options.readOnly ? 'disabled' : '' )) == null ? '' : __t) +
'" ref="deleteAll"><i class="fa fa-trash"></i></button>\r\n                ';
 } ;
__p += '\r\n              </div>\r\n            </th>\r\n            ';
 } ;
__p += '\r\n          </tr>\r\n        </thead>\r\n        <tbody ref="tbody"></tbody>\r\n      </table>\r\n    </div>\r\n    <div class="formio-grid-bottom" ' +
((__t = (ctx.component.showAddBtn ? 'style="margin-top: 10px"' : "")) == null ? '' : __t) +
'>\r\n      <div ref="paginationBottom"></div>\r\n      ';
 if (ctx.component.showAddBtn && !ctx.options.pdf) { ;
__p += '\r\n        <button class="usa-button formio-new-button ' +
((__t = ( ctx.options.readOnly ? 'disabled' : '' )) == null ? '' : __t) +
'" ref="addRow">+</button>\r\n      ';
 } ;
__p += '\r\n    </div>\r\n  </div>\r\n</div>\r\n';
return __p
}