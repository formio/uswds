Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div id="' +
((__t = (ctx.attrs.id)) == null ? '' : __t) +
'" class="usa-alert usa-alert--' +
((__t = (ctx.type === 'danger' ? 'error' : ctx.type)) == null ? '' : __t) +
' usa-alert--no-icon"\n  ';
 if (ctx.type === 'success' && !ctx.attrs['aria-live']) { ;
__p += '\n    aria-live="polite"\n    aria-atomic="true"\n  ';
 } ;
__p += '\n  ';
 for (var attr in ctx.attrs) { ;
__p += '\n    ';
 if (attr !== 'id' && attr !== 'class') { ;
__p += '\n      ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.attrs[attr])) == null ? '' : __t) +
'"\n    ';
 } ;
__p += '\n  ';
 } ;
__p += '\n>\n  ' +
((__t = (ctx.message)) == null ? '' : __t) +
'\n  <span class="usa-sr-only" id="hotkey-i-' +
((__t = (ctx.form._id)) == null ? '' : __t) +
'">' +
((__t = (ctx.t('errorListHotkey'))) == null ? '' : __t) +
'</span>\n</div>\n';
return __p
}