Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<fieldset class="usa-fieldset">\r\n  <legend class="usa-sr-only">' +
((__t = (ctx.component.label)) == null ? '' : __t) +
'</legend>\r\n  ';
 ctx.values.forEach(function(item) { ;
__p += '\r\n  <div class="usa-' +
((__t = (ctx.component.type === "selectboxes" ? "checkbox" : "radio")) == null ? '' : __t) +
' ' +
((__t = (ctx.inline ? 'display-inline float-left margin-right-1' : '')) == null ? '' : __t) +
'" ref="wrapper">\r\n    <' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\r\n      ref="input"\r\n      class="usa-' +
((__t = (ctx.component.type === "selectboxes" ? "checkbox" : "radio")) == null ? '' : __t) +
'__input"\r\n      ';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n      ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\r\n      ';
 } ;
__p += '\r\n      value="' +
((__t = (item.value)) == null ? '' : __t) +
'"\r\n      ';
 if (ctx.value && (ctx.value === item.value || (typeof ctx.value === 'object' && ctx.value.hasOwnProperty(item.value) && ctx.value[item.value]))) { ;
__p += '\r\n      checked=true\r\n      ';
 } ;
__p += '\r\n      id="' +
((__t = (ctx.id)) == null ? '' : __t) +
'' +
((__t = (ctx.row)) == null ? '' : __t) +
'-' +
((__t = (item.value)) == null ? '' : __t) +
'"\r\n      aria-required="' +
((__t = (ctx.input.component.validate.required)) == null ? '' : __t) +
'"\r\n    >\r\n    <label class="' +
((__t = (ctx.component.type === "selectboxes" ? "usa-checkbox__label" : "usa-radio__label")) == null ? '' : __t) +
'" for="' +
((__t = (ctx.id)) == null ? '' : __t) +
'' +
((__t = (ctx.row)) == null ? '' : __t) +
'-' +
((__t = (item.value)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(item.label))) == null ? '' : __t) +
'</label>\r\n  </div>\r\n  ';
 }) ;
__p += '\r\n</fieldset>\r\n';
return __p
}