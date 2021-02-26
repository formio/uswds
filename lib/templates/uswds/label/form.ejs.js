Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="usa-label ' +
((__t = (ctx.label.className)) == null ? '' : __t) +
' ' +
((__t = (ctx.label.hidden ? 'usa-sr-only' : '')) == null ? '' : __t) +
'">\n  <label\n    ref="label"\n    id="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n    for="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n  >\n    <span>' +
((__t = ( ctx.t(ctx.component.label) )) == null ? '' : __t) +
'</span>\n    ';
 if (ctx.component.type === 'number' || ctx.component.type === 'phoneNumber' || ctx.component.type === 'currency') { ;
__p += '\n    <span class=\'usa-sr-only\'>, ' +
((__t = (ctx.t('numeric only'))) == null ? '' : __t) +
',</span>\n    ';
 } ;
__p += '\n  </label>\n  ';
 if (ctx.component.tooltip && !ctx.label.hidden) { ;
__p += '\n    <span ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-base" tabindex="0"></span>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}