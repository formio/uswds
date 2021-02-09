Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div aria-label="Wizard" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-header">\n  <div ref="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-progressbar" class="stepper-row" tabindex="0" aria-label="Progress bar, Step ' +
((__t = (ctx.currentPage + 1)) == null ? '' : __t) +
' of ' +
((__t = (ctx.panels.length)) == null ? '' : __t) +
', ' +
((__t = (ctx.panels[ctx.currentPage].title)) == null ? '' : __t) +
'">\n    ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\n    <div data-index="' +
((__t = (index)) == null ? '' : __t) +
'" class="stepper-item ' +
((__t = (ctx.currentPage >= index ? 'stepper-item-active' : '')) == null ? '' : __t) +
'"></div>\n    ';
 }) ;
__p += '\n  </div>\n  <div class="stepper-info"\n       tabindex="-1"\n       aria-label="Progress bar, Step ' +
((__t = (ctx.currentPage + 1)) == null ? '' : __t) +
' of ' +
((__t = (ctx.panels.length)) == null ? '' : __t) +
', ' +
((__t = (ctx.panels[ctx.currentPage].title)) == null ? '' : __t) +
'"\n  >\n    <span class="usa-sr-only">Progress bar, step</span>\n    <span class="stepper-info-step">' +
((__t = (ctx.currentPage + 1)) == null ? '' : __t) +
'</span>\n    <span class="stepper-info-total">of ' +
((__t = (ctx.panels.length)) == null ? '' : __t) +
'</span>\n    <span class="stepper-info-text">' +
((__t = (ctx.panels[ctx.currentPage].title)) == null ? '' : __t) +
'</span>\n  </div>\n</div>\n';
return __p
}