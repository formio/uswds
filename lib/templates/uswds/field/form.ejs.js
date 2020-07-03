Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.labelMarkup) { ;
__p += '\n  ' +
((__t = ( ctx.labelMarkup )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n\n<div\n  ref="messageContainer"\n  class="text-secondary-dark width-full margin-top-05 formio-errors"\n></div>\n\n' +
((__t = (ctx.element)) == null ? '' : __t) +
'\n\n';
 if (ctx.component.description) { ;
__p += '\n  <div class="text-base">\n    <span id="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.description))) == null ? '' : __t) +
'</span>\n  </div>\n';
 } ;
__p += '\n';
return __p
}