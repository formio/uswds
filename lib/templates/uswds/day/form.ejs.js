Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p +=
((__t = ( console.log(ctx) )) == null ? '' : __t) +
'\r\n<fieldset class="usa-fieldset">\r\n  <legend class="usa-legend usa-sr-only">' +
((__t = (ctx.component.label)) == null ? '' : __t) +
'</legend>\r\n  <div class="usa-memorable-date"\r\n    role="group"\r\n    ';
 if (ctx.component.hideLabel) { ;
__p += '\r\n    aria-label="' +
((__t = (ctx.component.label)) == null ? '' : __t) +
'"\r\n    ';
 } else { ;
__p += '\r\n    aria-labelledby="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n    ';
 } ;
__p += '\r\n    ';
 if (ctx.component.description) { ;
__p += '\r\n    aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n    ';
 } ;
__p += '\r\n  >\r\n    ';
 if (ctx.dayFirst && ctx.showDay) { ;
__p += '\r\n    <div class="usa-form-group usa-form-group--day">\r\n      <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day"\r\n        class="usa-label ';
 if (ctx.component.hideInputLabels) { ;
__p += 'usa-sr-only';
 } ;
__p += ' ';
 if(ctx.component.fields.day.required) { ;
__p += 'field-required';
 } ;
__p += '"\r\n      >' +
((__t = (ctx.t('Day'))) == null ? '' : __t) +
'</label>\r\n\r\n      <input class="usa-input usa-input--inline"\r\n        id="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day"\r\n        ';
 if (ctx.component.fields.day.placeholder) { ;
__p += 'placeholder="' +
((__t = (ctx.component.fields.day.placeholder)) == null ? '' : __t) +
'"';
 } ;
__p += '\r\n        aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n        type="number" min="1" max="31" value="">\r\n    </div>\r\n    ';
 } ;
__p += '\r\n\r\n    ';
 if (ctx.showMonth) { ;
__p += '\r\n    <div class="usa-form-group usa-form-group--month">\r\n      <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-month"\r\n        class="usa-label ';
 if (ctx.component.hideInputLabels) { ;
__p += 'usa-sr-only';
 } ;
__p += ' ';
 if(ctx.component.fields.month.required) { ;
__p += 'field-required';
 } ;
__p += '"\r\n      >' +
((__t = (ctx.t('Month'))) == null ? '' : __t) +
'</label>\r\n\r\n      <input class="usa-input usa-input--inline"\r\n        id="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-month"\r\n        ';
 if (ctx.component.fields.month.placeholder) { ;
__p += 'placeholder="' +
((__t = (ctx.component.fields.month.placeholder)) == null ? '' : __t) +
'"';
 } ;
__p += '\r\n        aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n        type="number" min="1" max="12" value="">\r\n    </div>\r\n    ';
 } ;
__p += '\r\n\r\n    ';
 if (!ctx.dayFirst && ctx.showDay) { ;
__p += '\r\n    <div class="usa-form-group usa-form-group--day">\r\n      <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day"\r\n        class="usa-label ';
 if (ctx.component.hideInputLabels) { ;
__p += 'usa-sr-only';
 } ;
__p += ' ';
 if(ctx.component.fields.day.required) { ;
__p += 'field-required';
 } ;
__p += '"\r\n      >' +
((__t = (ctx.t('Day'))) == null ? '' : __t) +
'</label>\r\n\r\n      <input class="usa-input usa-input--inline"\r\n        id="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day"\r\n        ';
 if (ctx.component.fields.day.placeholder) { ;
__p += 'placeholder="' +
((__t = (ctx.component.fields.day.placeholder)) == null ? '' : __t) +
'"';
 } ;
__p += '\r\n        aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n        type="number" min="1" max="31" value="">\r\n    </div>\r\n    ';
 } ;
__p += '\r\n\r\n    ';
 if (ctx.showYear) { ;
__p += '\r\n    <div class="usa-form-group usa-form-group--year">\r\n      <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-year"\r\n        class="usa-label ';
 if (ctx.component.hideInputLabels) { ;
__p += 'usa-sr-only';
 } ;
__p += ' ';
 if(ctx.component.fields.year.required) { ;
__p += 'field-required';
 } ;
__p += '"\r\n      >' +
((__t = (ctx.t('Year'))) == null ? '' : __t) +
'</label>\r\n\r\n      <input class="usa-input usa-input--inline"\r\n        id="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-year"\r\n        ';
 if (ctx.component.fields.year.placeholder) { ;
__p += 'placeholder="' +
((__t = (ctx.component.fields.year.placeholder)) == null ? '' : __t) +
'"';
 } ;
__p += '\r\n        aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n        type="number"\r\n        min="' +
((__t = ( !!ctx.component.fields.year.minYear ? ctx.component.fields.year.minYear : 1900 )) == null ? '' : __t) +
'"\r\n        max="' +
((__t = ( !!ctx.component.fields.year.maxYear ? ctx.component.fields.year.maxYear : 2019 )) == null ? '' : __t) +
'" value="">\r\n    </div>\r\n    ';
 } ;
__p += '\r\n  </div>\r\n</fieldset>\r\n';
return __p
}