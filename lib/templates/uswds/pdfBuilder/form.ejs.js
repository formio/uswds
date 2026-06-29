Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div class="formio builder grid-row grid-gap formbuilder">\n  <div class="grid-col-4 mobile:grid-col-3 tablet:grid-col-2 formcomponents">\n    ' +
((__t = (ctx.sidebar)) == null ? '' : __t) +
'\n  </div>\n  <div class="grid-col-8 mobile:grid-col-9 tablet:grid-col-10 formarea" ref="form">\n  <div class="formio-drop-zone" ref="iframeDropzone"></div>\n    ' +
((__t = (ctx.form)) == null ? '' : __t) +
'\n  </div>\n</div>\n';
return __p
}