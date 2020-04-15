Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (!ctx.self.noInputLabel) { ;
__p += '\n<label\n  ref="label"\n  class="usa-label ' +
((__t = (ctx.label.className)) == null ? '' : __t) +
' ' +
((__t = (ctx.label.hidden ? 'usa-sr-only' : '')) == null ? '' : __t) +
'"\n  id="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n  for="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n>\n  ' +
((__t = ( ctx.t(ctx.component.label) )) == null ? '' : __t) +
'\n  ';
 if (ctx.component.type === 'number') { ;
__p += '\n  <span class=\'usa-sr-only\'>, ' +
((__t = (ctx.t('numeric only'))) == null ? '' : __t) +
',</span>\n  ';
 } ;
__p += '\n  ';
 if (ctx.component.tooltip) { ;
__p += '\n    <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-base" tabindex="0" aria-label="' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'"></i>\n  ';
 } ;
__p += '\n</label>\n';
 } ;
__p += '\n';
return __p
}