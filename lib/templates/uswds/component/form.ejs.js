Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div\n  id="' +
((__t = (ctx.id)) == null ? '' : __t) +
'"\n  class="' +
((__t = (ctx.component.type !== 'button' ? ctx.component.customClass : '')) == null ? '' : __t) +
'\n    formio-component-' +
((__t = (ctx.component.type)) == null ? '' : __t) +
'\n    ' +
((__t = (!ctx.self.hasInput ? 'usa-prose' : 'formio-form-group')) == null ? '' : __t) +
'\n    ' +
((__t = (!ctx.visible ? 'formio-hidden' : '')) == null ? '' : __t) +
'"\n  ';
 if (ctx.styles) { ;
__p += ' styles="' +
((__t = (ctx.styles)) == null ? '' : __t) +
'"';
 } ;
__p += '\n  ref="component"\n>\n  ';
 if (ctx.visible) { ;
__p += '\n  ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\n  ';
 } ;
__p += '\n</div>\n';
return __p
}