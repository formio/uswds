Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="formio builder grid-row grid-gap formbuilder">\n  <div class="grid-col-4 mobile:grid-col-3 tablet:grid-col-2 formcomponents">\n    ' +
((__t = (ctx.sidebar)) == null ? '' : __t) +
'\n  </div>\n  <div class="grid-col-8 mobile:grid-col-9 tablet:grid-col-10 formarea">\n    <ol class="display-flex padding-105 bg-base-lightest usa-list--unstyled margin-bottom-2">\n      ';
 ctx.pages.forEach(function(page, pageIndex) { ;
__p += '\n      <li class="margin-right-1">\n        <span title="' +
((__t = (page.title)) == null ? '' : __t) +
'" class="usa-tag ';
 if (pageIndex === ctx.self.page) { ;
__p += 'bg-primary';
 } else { ;
__p += 'bg-primary-light';
 } ;
__p += ' wizard-page-label" ref="gotoPage">' +
((__t = (page.title)) == null ? '' : __t) +
'</span>\n      </li>\n      ';
 }) ;
__p += '\n      <li class="margin-right-1">\n        <span title="' +
((__t = (ctx.t('Create Page'))) == null ? '' : __t) +
'" class="usa-tag bg-mint wizard-page-label" ref="addPage">\n          <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('Page'))) == null ? '' : __t) +
'\n        </span>\n      </li>\n    </ol>\n    <div ref="form">\n      ' +
((__t = (ctx.form)) == null ? '' : __t) +
'\n    </div>\n  </div>\n</div>\n';
return __p
}