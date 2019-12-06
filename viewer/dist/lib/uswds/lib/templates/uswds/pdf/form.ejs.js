Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div class="position-relative ' +
((__t = (ctx.classes)) == null ? '' : __t) +
'" ref="webform">\n  <span data-noattach="true" ref="zoomIn" class="usa-button usa-button--secondary position-absolute" style="right:10px;top:10px;">\n    <i class="' +
((__t = ( ctx.iconClass('zoom-in') )) == null ? '' : __t) +
'"></i>\n  </span>\n  <span data-noattach="true" ref="zoomOut" class="usa-button usa-button--secondary position-absolute" style="right:10px;top:60px;">\n    <i class="' +
((__t = ( ctx.iconClass('zoom-out') )) == null ? '' : __t) +
'"></i>\n  </span>\n  <div data-noattach="true" ref="iframeContainer"></div>\n  <button type="button" class="usa-button" ref="submitButton">' +
((__t = (ctx.t('Submit'))) == null ? '' : __t) +
'</button>\n</div>\n';
return __p
}