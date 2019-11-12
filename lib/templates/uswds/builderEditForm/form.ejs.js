Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="grid-row grid-gap">\n  <div class="grid-col mobile:grid-col-6">\n    <p class="font-body-md">' +
((__t = (ctx.t(ctx.componentInfo.title))) == null ? '' : __t) +
' ' +
((__t = (ctx.t('Component'))) == null ? '' : __t) +
'</p>\n  </div>\n  <div class="grid-col mobile:grid-col-6">\n    <div class="float-right" style="margin-right: 20px; margin-top: 10px">\n      <a href="' +
((__t = (ctx.t(ctx.componentInfo.documentation))) == null ? '' : __t) +
'" target="_blank">\n        <i class="' +
((__t = (ctx.iconClass('new-window'))) == null ? '' : __t) +
'"> ' +
((__t = (ctx.t('Help'))) == null ? '' : __t) +
'</i>\n      </a>\n    </div>\n  </div>\n</div>\n<div class="grid-row grid-gap">\n  <div class="grid-col ';
 if (ctx.preview) { ;
__p += 'mobile:grid-col-6';
 } else { ;
__p += 'mobile:grid-col-12';
 } ;
__p += '">\n    <div ref="editForm">\n      ' +
((__t = (ctx.editForm)) == null ? '' : __t) +
'\n    </div>\n    ';
 if (!ctx.preview) { ;
__p += '\n    <div style="margin-top: 10px;">\n      <button class="usa-button usa-button--accent-cool" style="margin-right: 10px;" ref="saveButton">' +
((__t = (ctx.t('Save'))) == null ? '' : __t) +
'</button>\n      <button class="usa-button usa-button--base" style="margin-right: 10px;" ref="cancelButton">' +
((__t = (ctx.t('Cancel'))) == null ? '' : __t) +
'</button>\n      <button class="usa-button usa-button--secondary" ref="removeButton">' +
((__t = (ctx.t('Remove'))) == null ? '' : __t) +
'</button>\n    </div>\n    ';
 } ;
__p += '\n  </div>\n  ';
 if (ctx.preview) { ;
__p += '\n  <div class="grid-col mobile:grid-col-6">\n    <div class="usa-card preview-panel">\n      <div class="usa-card-header">\n        <h4 class="usa-card-title margin-bottom-0">' +
((__t = (ctx.t('Preview'))) == null ? '' : __t) +
'</h4>\n      </div>\n      <div class="usa-card-body">\n        <div class="component-preview" ref="preview">\n          ' +
((__t = (ctx.preview)) == null ? '' : __t) +
'\n        </div>\n      </div>\n    </div>\n    ';
 if (ctx.componentInfo.help) { ;
__p += '\n    <div class="usa-card usa-card-body bg-base-lightest formio-settings-help">\n      ' +
((__t = ( ctx.t(ctx.componentInfo.help) )) == null ? '' : __t) +
'\n    </div>\n    ';
 } ;
__p += '\n    <div style="margin-top: 10px;">\n      <button class="usa-button usa-button--accent-cool" style="margin-right: 10px;" ref="saveButton">' +
((__t = (ctx.t('Save'))) == null ? '' : __t) +
'</button>\n      <button class="usa-button usa-button--base" style="margin-right: 10px;" ref="cancelButton">' +
((__t = (ctx.t('Cancel'))) == null ? '' : __t) +
'</button>\n      <button class="usa-button usa-button--secondary" ref="removeButton">' +
((__t = (ctx.t('Remove'))) == null ? '' : __t) +
'</button>\n    </div>\n  </div>\n  ';
 } ;
__p += '\n</div>\n';
return __p
}