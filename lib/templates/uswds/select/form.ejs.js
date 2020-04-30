Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<select\n  ref="' +
((__t = (ctx.input.ref ? ctx.input.ref : 'selectContainer')) == null ? '' : __t) +
'"\n  class="usa-select maxw-full ' +
((__t = (ctx.disabled ? 'bg-base-lightest' : '')) == null ? '' : __t) +
'"\n  ';
 for (var attr in ctx.input.attr) { ;
__p += '\n  ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\n  ';
 } ;
__p += '\n  ';
 if (!ctx.input.attr.id) { ;
__p += '\n  id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n  ';
 } ;
__p += '\n  ';
 if (ctx.component.description) { ;
__p += '\n  aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n  ';
 } ;
__p += '\n  aria-required="' +
((__t = (ctx.input.ref === 'selectContainer' || !ctx.input.ref ? ctx.input.component.validate.required : ctx.component.fields[ctx.input.ref].required)) == null ? '' : __t) +
'"\n>' +
((__t = (ctx.selectOptions)) == null ? '' : __t) +
'</select>\n';
return __p
}