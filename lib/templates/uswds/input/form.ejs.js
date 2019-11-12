Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p +=
((__t = (console.log(ctx))) == null ? '' : __t) +
'\r\n<div class="usa-form-group">\r\n  <' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\r\n    class="' +
((__t = ( ctx.input.type === 'textarea' ? 'usa-textarea' : 'usa-input' )) == null ? '' : __t) +
' width-full"\r\n    ref="' +
((__t = (ctx.input.ref ? ctx.input.ref : 'input')) == null ? '' : __t) +
'"\r\n    ';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n    ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\r\n    ';
 } ;
__p += '\r\n\r\n    ';
 if (!ctx.input.attr.id) { ;
__p += '\r\n    id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'' +
((__t = (ctx.component.multiple? `-${ctx.index}` : '')) == null ? '' : __t) +
'"\r\n    ';
 } ;
__p += '\r\n\r\n    ';
 if (ctx.component.hideLabel && ctx.component.type !== "day") { ;
__p += '\r\n    aria-label="' +
((__t = (ctx.component.label)) == null ? '' : __t) +
'"\r\n    ';
 } ;
__p += '\r\n\r\n    ';
 if (ctx.component.multiple) { ;
__p += '\r\n    aria-labelledby="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n    ';
 } ;
__p += '\r\n\r\n    ';
 if (!!ctx.component.description || ctx.component.showCharCount || ctx.component.showWordCount) { ;
__p += '\r\n    aria-describedby="' +
((__t = ( !!ctx.component.description ? `d-${ctx.instance.id}-${ctx.component.key}` : '' )) == null ? '' : __t) +
'\r\n      ' +
((__t = ( ctx.component.showCharCount ? `cc-${ctx.instance.id}-${ctx.component.key}` : '' )) == null ? '' : __t) +
'\r\n      ' +
((__t = ( ctx.component.showWordCount ? `wc-${ctx.instance.id}-${ctx.component.key}` : '' )) == null ? '' : __t) +
'"\r\n    ';
 } ;
__p += '\r\n\r\n    aria-required="' +
((__t = (ctx.input.ref === 'input' || !ctx.input.ref ? ctx.component.validate.required : ctx.component.fields[ctx.input.ref].required)) == null ? '' : __t) +
'"\r\n  >' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'</' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\r\n\r\n  ';
 if (ctx.component.showCharCount || ctx.component.showWordCount) { ;
__p += '\r\n  <div class="float-right">\r\n  ';
 } ;
__p += '\r\n    ';
 if (ctx.component.showCharCount) { ;
__p += '\r\n    <span ref="charcount" id="cc-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"></span>\r\n    ';
 } ;
__p += '\r\n\r\n    ';
 if (ctx.component.showWordCount) { ;
__p += '\r\n    <span ref="wordcount" id="wc-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"></span>\r\n    ';
 } ;
__p += '\r\n  ';
 if (ctx.component.showCharCount || ctx.component.showWordCount) { ;
__p += '\r\n  </div>\r\n  ';
 } ;
__p += '\r\n</div>\r\n';
return __p
}