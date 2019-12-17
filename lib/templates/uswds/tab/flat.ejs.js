Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 ctx.component.components.forEach(function(tab, index) { ;
__p += '\r\n  <div class="margin-bottom-2 usa-card">\r\n    <div class="usa-card-header bg-base-lightest">\r\n      <h4 class="margin-bottom-0 usa-card-title">' +
((__t = ( ctx.t(tab.label) )) == null ? '' : __t) +
'</h4>\r\n    </div>\r\n    <div class="usa-card-body">\r\n      ' +
((__t = ( ctx.tabComponents[index] )) == null ? '' : __t) +
'\r\n    </div>\r\n  </div>\r\n';
 }) ;
__p += '\r\n';
return __p
}