Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<tr ref="grid-row">\r\n  <td>\r\n    ' +
((__t = (ctx.element)) == null ? '' : __t) +
'\r\n  </td>\r\n  ';
 if (!ctx.disabled) { ;
__p += '\r\n  <td>\r\n    <button type="button" class="usa-button usa-button--secondary" ref="removeRow" aria-label="Remove ' +
((__t = (ctx.component.label)) == null ? '' : __t) +
' row ' +
((__t = (ctx.index + 1)) == null ? '' : __t) +
'" title="Remove row">\r\n      <i class="' +
((__t = (ctx.iconClass('remove-circle'))) == null ? '' : __t) +
'"></i>\r\n    </button>\r\n  </td>\r\n  ';
 } ;
__p += '\r\n</tr>\r\n';
return __p
}