Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<fieldset class="usa-fieldset">\n  <legend class="usa-sr-only">' +
((__t = (ctx.component.label)) == null ? '' : __t) +
'</legend>\n\n  ';
 ctx.values.forEach(function(item) { ;
__p += '\n  <div class="usa-radio ' +
((__t = (ctx.inline ? 'display-inline float-left margin-right-1' : '')) == null ? '' : __t) +
'" ref="wrapper">\n    <' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\n      ref="input"\n      class="' +
((__t = (ctx.component.type === "selectboxes" ? "usa-checkbox__input" : "usa-radio__input")) == null ? '' : __t) +
'"\n      ';
 for (var attr in ctx.input.attr) { ;
__p += '\n      ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\n      ';
 } ;
__p += '\n      value="' +
((__t = (item.value)) == null ? '' : __t) +
'"\n      ';
 if (ctx.value && (ctx.value === item.value || (typeof ctx.value === 'object' && ctx.value.hasOwnProperty(item.value) && ctx.value[item.value]))) { ;
__p += '\n      checked=true\n      ';
 } ;
__p += '\n      id="' +
((__t = (ctx.id)) == null ? '' : __t) +
'' +
((__t = (ctx.row)) == null ? '' : __t) +
'-' +
((__t = (item.value)) == null ? '' : __t) +
'"\n      aria-required="' +
((__t = (ctx.input.component.validate.required)) == null ? '' : __t) +
'"\n    >\n    <label class="' +
((__t = (ctx.component.type === "selectboxes" ? "usa-checkbox__label" : "usa-radio__label")) == null ? '' : __t) +
'" for="' +
((__t = (ctx.id)) == null ? '' : __t) +
'' +
((__t = (ctx.row)) == null ? '' : __t) +
'-' +
((__t = (item.value)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(item.label))) == null ? '' : __t) +
'</label>\n  </div>\n  ';
 }) ;
__p += '\n</fieldset>\n';
return __p
}