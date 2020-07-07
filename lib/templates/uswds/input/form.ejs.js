Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.component.prefix || ctx.component.suffix) { ;
__p += '\n<div class="input-group">\n';
 } ;
__p += '\n';
 if (ctx.component.prefix) { ;
__p += '\n<div class="input-group-prepend" ref="prefix">\n  <span class="input-group-text">\n    ';
 if (ctx.component.prefix instanceof HTMLElement) { ;
__p += '\n      ' +
((__t = ( ctx.t(ctx.component.prefix.outerHTML) )) == null ? '' : __t) +
'\n    ';
 } else { ;
__p += '\n      ' +
((__t = ( ctx.t(ctx.component.prefix) )) == null ? '' : __t) +
'\n    ';
 } ;
__p += '\n  </span>\n</div>\n';
 } ;
__p += '\n<' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\n  class="usa-' +
((__t = (ctx.input.type === 'textarea' ? 'textarea' : 'input')) == null ? '' : __t) +
' maxw-full"\n  ref="' +
((__t = (ctx.input.ref || 'input')) == null ? '' : __t) +
'"\n  ';
 for (var attr in ctx.input.attr) { ;
__p += '\n  ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\n  ';
 } ;
__p += '\n  id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n  aria-labelledby="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
' ';
 if (ctx.component.description) { ;
__p += 'd-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t);
 } ;
__p += '"\n  aria-required="' +
((__t = (ctx.input.ref === 'input' || !ctx.input.ref ? ctx.component.validate.required : ctx.component.fields[ctx.input.ref].required)) == null ? '' : __t) +
'"\n>' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'</' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\n';
 if (ctx.component.showCharCount) { ;
__p += '\n<span aria-live="polite" class="text-base float-right" ref="charcount"></span>\n';
 } ;
__p += '\n';
 if (ctx.component.type === 'datetime') { ;
__p += '\n<span aria-live="assertive" id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-liveRegion" class="usa-sr-only" ref="liveRegion"></span>\n';
 } ;
__p += '\n';
 if (ctx.component.suffix) { ;
__p += '\n<div class="input-group-append" ref="suffix">\n  <span class="input-group-text">\n    ';
 if (ctx.component.suffix instanceof HTMLElement) { ;
__p += '\n      ' +
((__t = ( ctx.t(ctx.component.suffix.outerHTML) )) == null ? '' : __t) +
'\n    ';
 } else { ;
__p += '\n      ' +
((__t = ( ctx.t(ctx.component.suffix) )) == null ? '' : __t) +
'\n    ';
 } ;
__p += '\n  </span>\n</div>\n';
 } ;
__p += '\n';
 if (ctx.component.prefix || ctx.component.suffix) { ;
__p += '\n</div>\n';
 } ;
__p += '\n';
return __p
}