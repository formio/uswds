Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="usa-accordion usa-accordion--bordered margin-top-1" aria-multiselectable="true">\r\n  <h2 class="usa-accordion__heading" ref="header">\r\n    <button\r\n      class="usa-accordion__button' +
((__t = (!ctx.component.collapsible ? ' non-collapsible-panel--button' : '')) == null ? '' : __t) +
'"\r\n      aria-expanded="' +
((__t = (ctx.component.collapsible ? !ctx.collapsed : true)) == null ? '' : __t) +
'"\r\n      aria-controls="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n      tabindex="' +
((__t = (ctx.component.collapsible ? 0 : 1)) == null ? '' : __t) +
'"\r\n    >\r\n      ' +
((__t = (ctx.t(ctx.component.title))) == null ? '' : __t) +
'\r\n      ';
 if (ctx.component.tooltip) { ;
__p += '\r\n        <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-based" tabindex="0"></i>\r\n      ';
 } ;
__p += '\r\n    </button>\r\n  </h2>\r\n\r\n  <div\r\n    id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n    class="usa-accordion__content usa-prose"\r\n    ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'"\r\n    ';
 if (ctx.component.collapsible && ctx.collapsed) { ;
__p += 'hidden';
 } ;
__p += '\r\n  >\r\n    ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\r\n  </div>\r\n</div>\r\n';
return __p
}