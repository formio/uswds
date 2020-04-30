Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<fieldset class="usa-fieldset">\n  <legend class="usa-legend usa-sr-only">' +
((__t = (ctx.component.label)) == null ? '' : __t) +
'</legend>\n  <div class="usa-memorable-date display-flex"\n    role="group"\n    ';
 if (ctx.component.hideLabel) { ;
__p += '\n    aria-label="' +
((__t = (ctx.component.label)) == null ? '' : __t) +
'"\n    ';
 } else { ;
__p += '\n    aria-labelledby="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n    ';
 } ;
__p += '\n    ';
 if (ctx.component.description) { ;
__p += '\n    aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n    ';
 } ;
__p += '\n  >\n    ';
 if (ctx.dayFirst && ctx.showDay) { ;
__p += '\n    <div class="usa-form-group usa-form-group--day flex-1">\n      <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day"\n        class="usa-label ';
 if (ctx.component.hideInputLabels) { ;
__p += 'usa-sr-only';
 } ;
__p += ' ';
 if(ctx.component.fields.day.required) { ;
__p += 'field-required';
 } ;
__p += '"\n      >' +
((__t = (ctx.t('Day'))) == null ? '' : __t) +
'</label>\n\n      <input class="usa-input usa-input--inline"\n        ref="day"\n        name="day"\n        id="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day"\n        ';
 if (ctx.component.fields.day.placeholder) { ;
__p += 'placeholder="' +
((__t = (ctx.component.fields.day.placeholder)) == null ? '' : __t) +
'"';
 } ;
__p += '\n        ';
 if (ctx.component.description) { ;
__p += '\n        aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n        ';
 } ;
__p += '\n        type="number" min="1" max="31" step="1" value="">\n    </div>\n    ';
 } ;
__p += '\n\n    ';
 if (ctx.showMonth) { ;
__p += '\n    <div class="usa-form-group usa-form-group--month flex-1">\n      <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-month"\n        class="usa-label ';
 if (ctx.component.hideInputLabels) { ;
__p += 'usa-sr-only';
 } ;
__p += ' ';
 if(ctx.component.fields.month.required) { ;
__p += 'field-required';
 } ;
__p += '"\n      >' +
((__t = (ctx.t('Month'))) == null ? '' : __t) +
'</label>\n\n      <input class="usa-input usa-input--inline"\n        ref="month"\n        name="month"\n        id="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-month"\n        ';
 if (ctx.component.fields.month.placeholder) { ;
__p += 'placeholder="' +
((__t = (ctx.component.fields.month.placeholder)) == null ? '' : __t) +
'"';
 } ;
__p += '\n        ';
 if (ctx.component.description) { ;
__p += '\n        aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n        ';
 } ;
__p += '\n        type="number" min="1" max="12" step="1" value="">\n    </div>\n    ';
 } ;
__p += '\n\n    ';
 if (!ctx.dayFirst && ctx.showDay) { ;
__p += '\n    <div class="usa-form-group usa-form-group--day flex-1">\n      <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day"\n        class="usa-label ';
 if (ctx.component.hideInputLabels) { ;
__p += 'usa-sr-only';
 } ;
__p += ' ';
 if(ctx.component.fields.day.required) { ;
__p += 'field-required';
 } ;
__p += '"\n      >' +
((__t = (ctx.t('Day'))) == null ? '' : __t) +
'</label>\n\n      <input class="usa-input usa-input--inline"\n        ref="day"\n        name="day"\n        id="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day"\n        ';
 if (ctx.component.fields.day.placeholder) { ;
__p += 'placeholder="' +
((__t = (ctx.component.fields.day.placeholder)) == null ? '' : __t) +
'"';
 } ;
__p += '\n        ';
 if (ctx.component.description) { ;
__p += '\n        aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n        ';
 } ;
__p += '\n        type="number" min="1" max="31" step="1" value="">\n    </div>\n    ';
 } ;
__p += '\n\n    ';
 if (ctx.showYear) { ;
__p += '\n    <div class="usa-form-group usa-form-group--year flex-1">\n      <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-year"\n        class="usa-label ';
 if (ctx.component.hideInputLabels) { ;
__p += 'usa-sr-only';
 } ;
__p += ' ';
 if(ctx.component.fields.year.required) { ;
__p += 'field-required';
 } ;
__p += '"\n      >' +
((__t = (ctx.t('Year'))) == null ? '' : __t) +
'</label>\n\n      <input class="usa-input usa-input--inline"\n        ref="year"\n        name="year"\n        id="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-year"\n        ';
 if (ctx.component.fields.year.placeholder) { ;
__p += 'placeholder="' +
((__t = (ctx.component.fields.year.placeholder)) == null ? '' : __t) +
'"';
 } ;
__p += '\n        ';
 if (ctx.component.description) { ;
__p += '\n        aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n        ';
 } ;
__p += '\n        type="number"\n        min="' +
((__t = ( !!ctx.component.fields.year.minYear ? ctx.component.fields.year.minYear : 1900 )) == null ? '' : __t) +
'"\n        max="' +
((__t = ( !!ctx.component.fields.year.maxYear ? ctx.component.fields.year.maxYear : 2019 )) == null ? '' : __t) +
'" value="">\n    </div>\n    ';
 } ;
__p += '\n  </div>\n  <input name="ctx.data[day]" type="hidden" class="form-control" lang="en" value="" ref="input">\n</fieldset>\n';
return __p
}