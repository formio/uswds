Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\r\n  class="usa-' +
((__t = (ctx.input.type === 'textarea' ? 'textarea' : 'input')) == null ? '' : __t) +
'"\r\n  ref="' +
((__t = (ctx.input.ref || 'input')) == null ? '' : __t) +
'"\r\n\r\n  ';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n  ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\r\n  ';
 } ;
__p += '\r\n\r\n  id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n\r\n  ';
 if (!!ctx.component.description) { ;
__p += '\r\n  aria-describedby="' +
((__t = ( !!ctx.component.description ? 'd-'+ ctx.instance.id + '-' + ctx.component.key : '' )) == null ? '' : __t) +
'"\r\n  ';
 } ;
__p += '\r\n\r\n  aria-required="' +
((__t = (ctx.input.ref === 'input' || !ctx.input.ref ? ctx.component.validate.required : ctx.component.fields[ctx.input.ref].required)) == null ? '' : __t) +
'"\r\n>' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'</' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\r\n';
return __p
}