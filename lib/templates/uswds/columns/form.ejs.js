Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 ctx.component.columns.forEach(function(column, index) { ;
__p += '\n<div\n  class="';
 if (ctx.size(column.size) !== '') { ;
__p +=
((__t = (ctx.size(column.size))) == null ? '' : __t) +
':';
 } ;
__p += 'grid-col-' +
((__t = (column.width)) == null ? '' : __t) +
' grid-offset-' +
((__t = (column.offset)) == null ? '' : __t) +
'"\n  ref="' +
((__t = (ctx.columnKey)) == null ? '' : __t) +
'"\n>\n  ' +
((__t = (ctx.columnComponents[index])) == null ? '' : __t) +
'\n</div>\n';
 }) ;
__p += '\n';
return __p
}