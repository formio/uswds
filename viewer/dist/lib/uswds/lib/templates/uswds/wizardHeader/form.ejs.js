Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<nav aria-label="navigation" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-header">\n  <ul class="usa-list usa-pagination">\n    ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\n    <li class="usa-page-item">\n      <button class="usa-button ' +
((__t = (ctx.currentPage === index ? '' : 'usa-button--outline')) == null ? '' : __t) +
' usa-page-link" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-link">' +
((__t = (panel.title)) == null ? '' : __t) +
'</button>\n    </li>\n    ';
 }) ;
__p += '\n  </ul>\n</nav>\n';
return __p
}