Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div\r\n  id="' +
((__t = (ctx.id)) == null ? '' : __t) +
'"\r\n  class="usa-form-group"\r\n  ';
 if (ctx.styles) { ;
__p += ' styles="' +
((__t = (ctx.styles)) == null ? '' : __t) +
'"';
 } ;
__p += '\r\n  ref="component"\r\n>\r\n  <span ref="invisibleSpan" class="usa-sr-only" tabindex="-1">&nbsp;</span>\r\n  ';
 if (ctx.visible) { ;
__p += '\r\n  ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\r\n  ';
 } ;
__p += '\r\n</div>';
return __p
}