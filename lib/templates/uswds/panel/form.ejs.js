Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="usa-accordion usa-accordion--bordered margin-top-1" aria-multiselectable="true">\n  <h2 class="usa-accordion__heading" ref="header">\n    ';
 if (ctx.component.collapsible) { ;
__p += '\n      <button\n        class="usa-accordion__button"\n        aria-expanded="' +
((__t = (ctx.component.collapsible ? !ctx.collapsed : true)) == null ? '' : __t) +
'"\n        aria-controls="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n      >\n        ' +
((__t = (ctx.t(ctx.component.title))) == null ? '' : __t) +
'\n        ';
 if (ctx.component.tooltip) { ;
__p += '\n          <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-based" tabindex="0"></i>\n        ';
 } ;
__p += '\n      </button>\n    ';
 } else { ;
__p += '\n      <div class="usa-accordion__button non-collapsible-panel--button">\n        ' +
((__t = (ctx.t(ctx.component.title))) == null ? '' : __t) +
'\n        ';
 if (ctx.component.tooltip) { ;
__p += '\n          <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-based" tabindex="0"></i>\n        ';
 } ;
__p += '\n      </div>\n    ';
 } ;
__p += '\n  </h2>\n\n  <div\n    id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n    class="usa-accordion__content usa-prose"\n    ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'"\n    ';
 if (ctx.component.collapsible && ctx.collapsed) { ;
__p += 'hidden';
 } ;
__p += '\n  >\n    ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\n  </div>\n</div>\n';
return __p
}