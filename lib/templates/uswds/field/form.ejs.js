Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.component.type !== 'checkbox') { ;
__p += '\r\n  ' +
((__t = ( ctx.render('label', ctx) )) == null ? '' : __t) +
'\r\n';
 } ;
__p += '\r\n\r\n<div\r\n  ref="messageContainer"\r\n  class="text-secondary-dark width-full margin-top-05 formio-errors"\r\n></div>\r\n\r\n' +
((__t = (ctx.element)) == null ? '' : __t) +
'\r\n\r\n';
 if (ctx.component.description) { ;
__p += '\r\n  <div class="text-base">\r\n    <span id="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.description))) == null ? '' : __t) +
'</span>\r\n  </div>\r\n';
 } ;
__p += '\r\n';
return __p
}