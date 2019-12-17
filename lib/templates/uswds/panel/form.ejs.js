Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="margin-bottom-1 usa-card">\r\n  <div class="usa-card-header bg-base-lightest" ref="header">\r\n    <span class="margin-bottom-0 usa-card-title">\r\n      ';
 if (ctx.component.collapsible) { ;
__p += '\r\n        <i class="formio-collapse-icon ' +
((__t = (ctx.iconClass(ctx.collapsed ? 'plus-square-o' : 'minus-square-o'))) == null ? '' : __t) +
' text-base" data-title="Collapse Panel"></i>\r\n      ';
 } ;
__p += '\r\n      ' +
((__t = (ctx.t(ctx.component.title))) == null ? '' : __t) +
'\r\n      ';
 if (ctx.component.tooltip) { ;
__p += '\r\n        <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-base"></i>\r\n      ';
 } ;
__p += '\r\n    </span>\r\n  </div>\r\n  ';
 if (!ctx.collapsed || ctx.builder) { ;
__p += '\r\n  <div class="usa-card-body" ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'">\r\n    ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\r\n  </div>\r\n  ';
 } ;
__p += '\r\n</div>\r\n';
return __p
}