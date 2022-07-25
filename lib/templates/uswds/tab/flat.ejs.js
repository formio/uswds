Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 ctx.component.components.forEach(function(tab, index) { ;
__p += '\n  <div class="margin-bottom-2 formio-usa-card">\n    <div class="formio-usa-card-header bg-base-lightest">\n      <h4 class="margin-bottom-0 formio-usa-card-title">' +
((__t = ( ctx.t(tab.label) )) == null ? '' : __t) +
'</h4>\n    </div>\n    <div class="formio-usa-card-body" ref="' +
((__t = (ctx.tabKey)) == null ? '' : __t) +
'">\n      ' +
((__t = ( ctx.tabComponents[index] )) == null ? '' : __t) +
'\n    </div>\n  </div>\n';
 }) ;
__p += '\n';
return __p
}