Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="grid-row grid-gap">\n';
 ctx.component.columns.forEach(function(column, index) { ;
__p += '\n    <div class="';
 if (ctx.size(column.size) !== '') { ;
__p +=
((__t = (ctx.size(column.size))) == null ? '' : __t) +
':';
 } ;
__p += 'grid-col-' +
((__t = (column.width)) == null ? '' : __t) +
' grid-offset-' +
((__t = (column.offset)) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.columnKey)) == null ? '' : __t) +
'">\n        ' +
((__t = (ctx.columnComponents[index])) == null ? '' : __t) +
'\n    </div>\n';
 }) ;
__p += '\n</div>\n';
return __p
}