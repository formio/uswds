Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<span id="l-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'" class="usa-modal-label">\n  ' +
((__t = ( ctx.t(ctx.component.label) )) == null ? '' : __t) +
'<span ref="modalLabelValue" class="usa-sr-only">. ' +
((__t = ( ctx.previewText )) == null ? '' : __t) +
'</span>\n</span><br>\n<div\n  ref="modalMessageContainer"\n  class="text-secondary-dark width-full formio-errors"\n></div>\n<span class="usa-sr-only" ref="modalPreviewLiveRegion" aria-live="assertive"></span>\n<button lang="en" class="open-modal-button" ref="openModal" aria-labelledby="l-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'">\n  ' +
((__t = ( ctx.previewText )) == null ? '' : __t) +
'\n</button>\n';
return __p
}