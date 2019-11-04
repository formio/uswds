Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div class="formio-errors">\r\n  <p id="e-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'" class="usa-error-message">' +
((__t = (ctx.message)) == null ? '' : __t) +
'</p>\r\n</div>\r\n';
return __p
}