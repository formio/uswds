Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div\n  id="' +
((__t = (ctx.id)) == null ? '' : __t) +
'"\n  class="usa-form-group usa-prose ';
 if (ctx.component.type === 'columns') { ;
__p += 'grid-row grid-gap';
 } ;
__p += '"\n  ';
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