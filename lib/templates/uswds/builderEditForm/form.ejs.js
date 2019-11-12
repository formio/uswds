Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="grid-row grid-gap">\r\n  <div class="grid-col mobile:grid-col-6">\r\n    <p class="font-body-md">' +
((__t = (ctx.t(ctx.componentInfo.title))) == null ? '' : __t) +
' ' +
((__t = (ctx.t('Component'))) == null ? '' : __t) +
'</p>\r\n  </div>\r\n  <div class="grid-col mobile:grid-col-6">\r\n    <div class="float-right" style="margin-right: 20px; margin-top: 10px">\r\n      <a href="' +
((__t = (ctx.t(ctx.componentInfo.documentation))) == null ? '' : __t) +
'" target="_blank">\r\n        <i class="' +
((__t = (ctx.iconClass('new-window'))) == null ? '' : __t) +
'"> ' +
((__t = (ctx.t('Help'))) == null ? '' : __t) +
'</i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class="grid-row grid-gap">\r\n  <div class="grid-col ';
 if (ctx.preview) { ;
__p += 'mobile:grid-col-6';
 } else { ;
__p += 'mobile:grid-col-12';
 } ;
__p += '">\r\n    <div ref="editForm">\r\n      ' +
((__t = (ctx.editForm)) == null ? '' : __t) +
'\r\n    </div>\r\n    ';
 if (!ctx.preview) { ;
__p += '\r\n    <div style="margin-top: 10px;">\r\n      <button class="usa-button usa-button--accent-cool" style="margin-right: 10px;" ref="saveButton">' +
((__t = (ctx.t('Save'))) == null ? '' : __t) +
'</button>\r\n      <button class="usa-button usa-button--base" style="margin-right: 10px;" ref="cancelButton">' +
((__t = (ctx.t('Cancel'))) == null ? '' : __t) +
'</button>\r\n      <button class="usa-button usa-button--secondary" ref="removeButton">' +
((__t = (ctx.t('Remove'))) == null ? '' : __t) +
'</button>\r\n    </div>\r\n    ';
 } ;
__p += '\r\n  </div>\r\n  ';
 if (ctx.preview) { ;
__p += '\r\n  <div class="grid-col mobile:grid-col-6">\r\n    <div class="usa-card preview-panel">\r\n      <div class="usa-card-header">\r\n        <h4 class="usa-card-title margin-bottom-0">' +
((__t = (ctx.t('Preview'))) == null ? '' : __t) +
'</h4>\r\n      </div>\r\n      <div class="usa-card-body">\r\n        <div class="component-preview" ref="preview">\r\n          ' +
((__t = (ctx.preview)) == null ? '' : __t) +
'\r\n        </div>\r\n      </div>\r\n    </div>\r\n    ';
 if (ctx.componentInfo.help) { ;
__p += '\r\n    <div class="usa-card usa-card-body bg-base-lightest formio-settings-help">\r\n      ' +
((__t = ( ctx.t(ctx.componentInfo.help) )) == null ? '' : __t) +
'\r\n    </div>\r\n    ';
 } ;
__p += '\r\n    <div style="margin-top: 10px;">\r\n      <button class="usa-button usa-button--accent-cool" style="margin-right: 10px;" ref="saveButton">' +
((__t = (ctx.t('Save'))) == null ? '' : __t) +
'</button>\r\n      <button class="usa-button usa-button--base" style="margin-right: 10px;" ref="cancelButton">' +
((__t = (ctx.t('Cancel'))) == null ? '' : __t) +
'</button>\r\n      <button class="usa-button usa-button--secondary" ref="removeButton">' +
((__t = (ctx.t('Remove'))) == null ? '' : __t) +
'</button>\r\n    </div>\r\n  </div>\r\n  ';
 } ;
__p += '\r\n</div>\r\n';
return __p
}