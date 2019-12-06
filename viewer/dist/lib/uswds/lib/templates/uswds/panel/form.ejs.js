Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="margin-bottom-1 usa-card">\n  <div class="usa-card-header bg-base-lightest" ref="header">\n    <span class="margin-bottom-0 usa-card-title">\n      ';
 if (ctx.component.collapsible) { ;
__p += '\n        <i class="formio-collapse-icon ' +
((__t = (ctx.iconClass(ctx.collapsed ? 'plus-square-o' : 'minus-square-o'))) == null ? '' : __t) +
' text-base" data-title="Collapse Panel"></i>\n      ';
 } ;
__p += '\n      ' +
((__t = (ctx.t(ctx.component.title))) == null ? '' : __t) +
'\n      ';
 if (ctx.component.tooltip) { ;
__p += '\n        <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-base"></i>\n      ';
 } ;
__p += '\n    </span>\n  </div>\n  ';
 if (!ctx.collapsed || ctx.builder) { ;
__p += '\n  <div class="usa-card-body" ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'">\n    ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\n  </div>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}