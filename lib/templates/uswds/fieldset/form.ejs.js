Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<fieldset class="usa-fieldset">\n  ';
 if (ctx.component.legend) { ;
__p += '\n  <legend ref="header" class="usa-sr-only">\n    ' +
((__t = (ctx.t(ctx.component.legend))) == null ? '' : __t) +
'\n  </legend>\n  <span class="legend-wrapper usa-legend">\n    <span class="position-relative ' +
((__t = (ctx.component.collapsible ? 'formio-clickable' : '')) == null ? '' : __t) +
'">\n      ' +
((__t = (ctx.t(ctx.component.legend))) == null ? '' : __t) +
'\n    </span>\n    ';
 if (ctx.component.tooltip) { ;
__p += '\n      <span ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-base" tabindex="0"></span>\n    ';
 } ;
__p += '\n  </span>\n  ';
 } ;
__p += '\n  ';
 if (!ctx.collapsed) { ;
__p += '\n  <div class="fieldset-body" ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'">\n    ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\n  </div>\n  ';
 } ;
__p += '\n</fieldset>\n';
return __p
}