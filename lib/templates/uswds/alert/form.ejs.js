Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div id="' +
((__t = (ctx.attrs.id)) == null ? '' : __t) +
'" class="usa-alert usa-alert--' +
((__t = (ctx.type === 'danger' ? 'error' : ctx.type)) == null ? '' : __t) +
' usa-alert--no-icon">\n  ' +
((__t = (ctx.message)) == null ? '' : __t) +
'\n  <span class="usa-sr-only" id="hotkey-i-' +
((__t = (ctx.form._id)) == null ? '' : __t) +
'">' +
((__t = (ctx.t('errorListHotkey'))) == null ? '' : __t) +
'</span>\n</div>\n';
return __p
}