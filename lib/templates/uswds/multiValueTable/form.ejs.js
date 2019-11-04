Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="usa-table" role="presentation">\r\n  <tbody>\r\n  ' +
((__t = (ctx.rows)) == null ? '' : __t) +
'\r\n  ';
 if (!ctx.disabled) { ;
__p += '\r\n  <tr>\r\n    <td colspan="2">\r\n      <button class="usa-button formio-button-add-another" ref="addButton" aria-describedby="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'">\r\n        <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i>\r\n        ' +
((__t = (ctx.t(ctx.addAnother))) == null ? '' : __t) +
'\r\n      </button>\r\n    </td>\r\n  </tr>\r\n  ';
 } ;
__p += '\r\n  </tbody>\r\n</table>\r\n';
return __p
}