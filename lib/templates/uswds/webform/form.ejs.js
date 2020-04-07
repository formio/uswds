Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="' +
((__t = (ctx.classes)) == null ? '' : __t) +
'" ref="webform" novalidate>' +
((__t = (ctx.children)) == null ? '' : __t) +
'</div>\n<!-- Please reach out to Form.io to purchase an Enterprise License. -->\n';
 if (!Formio || !Formio.license) { ;
__p += '\n    <small style="float:right;">powered by &nbsp;<a target="_blank" href="https://form.io"><img style="height:20px;float:right;" src="https://help.form.io/assets/formio-logo.png" /></a></small>\n';
 } ;
__p += '\n<!-- -------------------------------------------------------------- -->\n';
return __p
}