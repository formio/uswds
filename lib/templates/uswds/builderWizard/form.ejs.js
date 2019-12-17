Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="formio builder grid-row grid-gap formbuilder">\r\n  <div class="grid-col-4 mobile:grid-col-3 tablet:grid-col-2 formcomponents">\r\n    ' +
((__t = (ctx.sidebar)) == null ? '' : __t) +
'\r\n  </div>\r\n  <div class="grid-col-8 mobile:grid-col-9 tablet:grid-col-10 formarea">\r\n    <ol class="display-flex padding-105 bg-base-lightest usa-list--unstyled margin-bottom-2">\r\n      ';
 ctx.pages.forEach(function(page, pageIndex) { ;
__p += '\r\n      <li class="margin-right-1">\r\n        <span title="' +
((__t = (page.title)) == null ? '' : __t) +
'" class="usa-tag ';
 if (pageIndex === ctx.self.page) { ;
__p += 'bg-primary';
 } else { ;
__p += 'bg-primary-light';
 } ;
__p += ' wizard-page-label" ref="gotoPage">' +
((__t = (page.title)) == null ? '' : __t) +
'</span>\r\n      </li>\r\n      ';
 }) ;
__p += '\r\n      <li class="margin-right-1">\r\n        <span title="' +
((__t = (ctx.t('Create Page'))) == null ? '' : __t) +
'" class="usa-tag bg-mint wizard-page-label" ref="addPage">\r\n          <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('Page'))) == null ? '' : __t) +
'\r\n        </span>\r\n      </li>\r\n    </ol>\r\n    <div ref="form">\r\n      ' +
((__t = (ctx.form)) == null ? '' : __t) +
'\r\n    </div>\r\n  </div>\r\n</div>\r\n';
return __p
}