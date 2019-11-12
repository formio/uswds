Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.label.labelPosition !== 'bottom' && ctx.component.type !== 'checkbox') { ;
__p += '\n  ' +
((__t = ( ctx.render('label', ctx) )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n' +
((__t = (ctx.element)) == null ? '' : __t) +
'\n';
 if (ctx.label.labelPosition === 'bottom') { ;
__p += '\n  ' +
((__t = ( ctx.render('label', ctx) )) == null ? '' : __t) +
'\n';
 } ;
__p += '\n\n';
 if (ctx.component.description) { ;
__p += '\n  <div class="text-base">\n    <span id="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.description))) == null ? '' : __t) +
'</span>\n  </div>\n';
 } ;
__p += '\n';
return __p
}