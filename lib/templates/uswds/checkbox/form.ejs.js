Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="usa-checkbox">\r\n  <' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\r\n    id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n    ref="input"\r\n    class="usa-checkbox__input "\r\n    ';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n    ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\r\n    ';
 } ;
__p += '\r\n    ';
 if (ctx.checked) { ;
__p += 'checked=true';
 } ;
__p += '\r\n    ';
 if (ctx.component.hideLabel) { ;
__p += 'aria-label="' +
((__t = (ctx.component.label)) == null ? '' : __t) +
'"';
 } ;
__p += '\r\n    aria-required="' +
((__t = (ctx.component.validate.required)) == null ? '' : __t) +
'"\r\n    aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n  ></' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\r\n  <label\r\n    class="' +
((__t = (ctx.input.labelClass)) == null ? '' : __t) +
' usa-checkbox__label"\r\n    for="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n  >\r\n    ';
 if (!ctx.self.labelIsHidden()) { ;
__p +=
((__t = (ctx.input.label)) == null ? '' : __t);
 } ;
__p += '\r\n    ';
 if (ctx.component.tooltip) { ;
__p += '\r\n    <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-base"></i>\r\n    ';
 } ;
__p += '\r\n    ' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'\r\n  </label>\r\n</div>\r\n';
return __p
}