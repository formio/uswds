Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<fieldset\n  class="usa-fieldset"\n  ref="fieldset"\n  aria-labelledby="l-' +
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
__p += '"\n>\n  <legend id="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'" ref="label" class="usa-sr-only">\n    ' +
((__t = (ctx.t(ctx.component.label))) == null ? '' : __t) +
'\n  </legend>\n  <span class="legend-wrapper font-sans-md">\n    <span class="' +
((__t = (ctx.component.validate && ctx.component.validate.required ? ' field-required' : '')) == null ? '' : __t) +
'">\n      ' +
((__t = (ctx.t(ctx.component.label))) == null ? '' : __t) +
'\n    </span>\n    ';
 if (ctx.component.tooltip) { ;
__p += '\n      <span ref="tooltip" data-tooltip="' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-base" tabindex="0"></span>\n    ';
 } ;
__p += '\n  </span>\n\n  <div\n    ref="messageContainer"\n    class="text-secondary-dark width-full margin-top-05 formio-errors"\n  ></div>\n\n  ';
 ctx.values.forEach(function(item) { ;
__p += '\n  <div class="usa-' +
((__t = (ctx.component.type === "selectboxes" ? "checkbox" : "radio")) == null ? '' : __t) +
' ' +
((__t = (ctx.inline ? 'display-inline float-left margin-right-1' : '')) == null ? '' : __t) +
'" ref="wrapper">\n    <' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\n      ref="input"\n      class="usa-' +
((__t = (ctx.component.type === "selectboxes" ? "checkbox" : "radio")) == null ? '' : __t) +
'__input ' +
((__t = (ctx.component.tileView ? ctx.component.type === 'selectboxes' ? 'usa-checkbox__input--tile' : 'usa-radio__input--tile' : '')) == null ? '' : __t) +
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
__p += '\n\n  ';
 if (ctx.component.description) { ;
__p += '\n    <div class="text-base-dark">\n      <span id="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.description))) == null ? '' : __t) +
'</span>\n    </div>\n  ';
 } ;
__p += '\n</fieldset>\n';
return __p
}