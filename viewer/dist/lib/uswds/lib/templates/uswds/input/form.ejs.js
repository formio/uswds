Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="usa-form-group">\n  <' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\n    class="' +
((__t = ( ctx.input.type === 'textarea' ? 'usa-textarea' : 'usa-input' )) == null ? '' : __t) +
' width-full"\n    ref="' +
((__t = (ctx.input.ref ? ctx.input.ref : 'input')) == null ? '' : __t) +
'"\n    ';
 for (var attr in ctx.input.attr) { ;
__p += '\n    ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\n    ';
 } ;
__p += '\n\n    ';
 if (!ctx.input.attr.id) { ;
__p += '\n    id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'' +
((__t = (ctx.component.multiple? `-${ctx.index}` : '')) == null ? '' : __t) +
'"\n    ';
 } ;
__p += '\n\n    ';
 if (ctx.component.hideLabel && ctx.component.type !== "day") { ;
__p += '\n    aria-label="' +
((__t = (ctx.component.label)) == null ? '' : __t) +
'"\n    ';
 } ;
__p += '\n\n    ';
 if (ctx.component.multiple) { ;
__p += '\n    aria-labelledby="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n    ';
 } ;
__p += '\n\n    ';
 if (!!ctx.component.description || ctx.component.showCharCount || ctx.component.showWordCount) { ;
__p += '\n    aria-describedby="' +
((__t = ( !!ctx.component.description ? `d-${ctx.instance.id}-${ctx.component.key}` : '' )) == null ? '' : __t) +
'\n      ' +
((__t = ( ctx.component.showCharCount ? `cc-${ctx.instance.id}-${ctx.component.key}` : '' )) == null ? '' : __t) +
'\n      ' +
((__t = ( ctx.component.showWordCount ? `wc-${ctx.instance.id}-${ctx.component.key}` : '' )) == null ? '' : __t) +
'"\n    ';
 } ;
__p += '\n\n    aria-required="' +
((__t = (ctx.input.ref === 'input' || !ctx.input.ref ? ctx.component.validate.required : ctx.component.fields[ctx.input.ref].required)) == null ? '' : __t) +
'"\n  >' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'</' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\n\n  ';
 if (ctx.component.showCharCount || ctx.component.showWordCount) { ;
__p += '\n  <div class="float-right">\n  ';
 } ;
__p += '\n    ';
 if (ctx.component.showCharCount) { ;
__p += '\n    <span ref="charcount" id="cc-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"></span>\n    ';
 } ;
__p += '\n\n    ';
 if (ctx.component.showWordCount) { ;
__p += '\n    <span ref="wordcount" id="wc-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"></span>\n    ';
 } ;
__p += '\n  ';
 if (ctx.component.showCharCount || ctx.component.showWordCount) { ;
__p += '\n  </div>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}