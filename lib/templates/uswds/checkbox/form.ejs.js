Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div\n  ref="messageContainer"\n  class="text-secondary-dark width-full margin-top-05 formio-errors"\n  aria-live="polite"\n></div>\n\n<div class="usa-checkbox">\n  <' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\n    id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n    ref="input"\n    class="usa-checkbox__input"\n    ';
 for (var attr in ctx.input.attr) { ;
__p += '\n    ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\n    ';
 } ;
__p += '\n    ';
 if (ctx.checked) { ;
__p += 'checked=true';
 } ;
__p += '\n    aria-required="' +
((__t = (ctx.component.validate.required)) == null ? '' : __t) +
'"\n    ';
 if (ctx.component.description) { ;
__p += '\n    aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n    ';
 } ;
__p += '\n  ></' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\n  <label\n    ref="label"\n    class="' +
((__t = (ctx.input.labelClass)) == null ? '' : __t) +
' usa-checkbox__label padding-left-0 text-indent-0"\n    for="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n  >\n    ' +
((__t = (ctx.input.label)) == null ? '' : __t) +
'\n    ';
 if (ctx.component.tooltip) { ;
__p += '\n    <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-base" tabindex="0" aria-label="' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'"></i>\n    ';
 } ;
__p += '\n    ' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'\n  </label>\n</div>\n\n';
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