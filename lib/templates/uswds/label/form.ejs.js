Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<label\r\n  ref="label"\r\n  class="usa-label ' +
((__t = (ctx.label.className)) == null ? '' : __t) +
' ' +
((__t = (ctx.label.hidden ? 'usa-sr-only' : '')) == null ? '' : __t) +
'"\r\n  id="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n  for="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n>\r\n  ' +
((__t = ( ctx.t(ctx.component.label) )) == null ? '' : __t) +
'\r\n  ';
 if (ctx.component.tooltip) { ;
__p += '\r\n    <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-base" tabindex="0" aria-label="' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'"></i>\r\n  ';
 } ;
__p += '\r\n</label>\r\n';
return __p
}