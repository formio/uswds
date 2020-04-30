Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<nav aria-label="navigation" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-header">\n  <ul class="usa-list usa-pagination grid-row padding-left-0" role="tablist">\n    ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\n    <li class="usa-page-item grid-col-12 mobile-lg:grid-col-6 tablet:grid-col-4 desktop:grid-col display-flex flex-align-stretch">\n      <button data-index="' +
((__t = (index)) == null ? '' : __t) +
'" class="usa-button' +
((__t = (ctx.currentPage === index ? '' : ' usa-button--outline')) == null ? '' : __t) +
' usa-page-link flex-fill" role="tab" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link">' +
((__t = (panel.title)) == null ? '' : __t) +
'</button>\n    </li>\n    ';
 }) ;
__p += '\n  </ul>\n</nav>\n';
return __p
}