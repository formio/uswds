Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\n  ref="button"\n  ';
 for (var attr in ctx.input.attr) { ;
__p += '\n  ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\n  ';
 } ;
__p += '\n>\n  ' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'\n  ';
 if (ctx.component.tooltip) { ;
__p += '\n    <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-base" tabindex="0"></i>\n  ';
 } ;
__p += '\n</' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\n<div ref="buttonMessageContainer">\n  <span class="display-block margin-top-1 margin-bottom-105 help-block" ref="buttonMessage"></span>\n</div>\n';
return __p
}