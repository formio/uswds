Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<p\r\n  id="e-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.key)) == null ? '' : __t) +
'"\r\n  class="usa-error-message"\r\n  ';
 for (var attr in ctx.attr) { ;
__p += '\r\n  ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.attr[attr])) == null ? '' : __t) +
'"\r\n  ';
 } ;
__p += '\r\n>' +
((__t = (ctx.message)) == null ? '' : __t) +
'</p>';
return __p
}