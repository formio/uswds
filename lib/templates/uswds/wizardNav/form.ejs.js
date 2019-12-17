Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<ul class="padding-0 usa-list--unstyled display-flex" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-nav">\r\n  ';
 if (ctx.buttons.cancel) { ;
__p += '\r\n  <li>\r\n    <button class="usa-button usa-button--secondary btn-wizard-nav-cancel" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-cancel">' +
((__t = (ctx.t('cancel'))) == null ? '' : __t) +
'</button>\r\n  </li>\r\n  ';
 } ;
__p += '\r\n  ';
 if (ctx.buttons.previous) { ;
__p += '\r\n  <li>\r\n    <button class="usa-button btn-wizard-nav-previous" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-previous">' +
((__t = (ctx.t('previous'))) == null ? '' : __t) +
'</button>\r\n  </li>\r\n  ';
 } ;
__p += '\r\n  ';
 if (ctx.buttons.next) { ;
__p += '\r\n  <li>\r\n    <button class="usa-button btn-wizard-nav-next" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-next">' +
((__t = (ctx.t('next'))) == null ? '' : __t) +
'</button>\r\n  </li>\r\n  ';
 } ;
__p += '\r\n  ';
 if (ctx.buttons.submit) { ;
__p += '\r\n  <li>\r\n    <button class="usa-button btn-wizard-nav-submit" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-submit">' +
((__t = (ctx.t('submit'))) == null ? '' : __t) +
'</button>\r\n  </li>\r\n  ';
 } ;
__p += '\r\n</ul>\r\n';
return __p
}