Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="formio-component-modal-wrapper formio-component-modal-wrapper-' +
((__t = ( ctx.component.type )) == null ? '' : __t) +
'" ref="componentModalWrapper">\n  <div ref="openModalWrapper"></div>\n  <div class="formio-dialog formio-dialog-theme-default component-rendering-hidden" ref="modalWrapper">\n    <div class="formio-dialog-overlay" ref="modalOverlay"></div>\n    <div class="formio-dialog-content" aria-labelledby="ml-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'" ';
 if (!ctx.self.isIE()) { ;
__p += ' role="dialog" ';
 } ;
__p += ' ref="modalContents">\n      <label class="usa-sr-only" id="ml-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'">' +
((__t = ( ctx.t(ctx.component.label) )) == null ? '' : __t) +
'' +
((__t = (ctx.self.isIE() ? ', dialog' : '')) == null ? '' : __t) +
'</label>\n      <button class="formio-dialog-close float-right" title="Close" aria-label="Close button. Click to get back to the form" ref="modalCloseButton"></button>\n      <div ref="modalContents">\n        ';
 if (ctx.visible) { ;
__p += '\n        ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\n        ';
 } ;
__p += '\n        <div class="formio-dialog-buttons float-right">\n          <button class="usa-button usa-button--secondary" ref="modalClose" aria-label="Cancel button. Click to cancel the changes and get back to the form.">' +
((__t = (ctx.t('Cancel'))) == null ? '' : __t) +
'</button>\n          <button class="usa-button" ref="modalSave" aria-label="Save button. Click to save the changes and get back to the form.">' +
((__t = (ctx.t('Save'))) == null ? '' : __t) +
'</button>\n        </div>\n      </div>\n      <span class="usa-sr-only" ref="modalLiveRegion" aria-live="assertive"></span>\n    </div>\n  </div>\n</div>\n';
return __p
}