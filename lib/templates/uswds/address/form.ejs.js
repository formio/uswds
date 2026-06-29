Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.mode.autocomplete) { ;
__p += '\n  <div class="address-autocomplete-container">\n    <input\n      ref="' +
((__t = ( ctx.ref.searchInput )) == null ? '' : __t) +
'"\n      class="usa-input maxw-full",\n      ';
 for (var attr in ctx.inputAttributes) { ;
__p += '\n        ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.inputAttributes[attr])) == null ? '' : __t) +
'"\n      ';
 } ;
__p += '\n      value="' +
((__t = ( ctx.displayValue )) == null ? '' : __t) +
'"\n      autocomplete="off"\n    >\n    ';
 if (!ctx.component.disableClearIcon) { ;
__p += '\n      <i\n        class="address-autocomplete-remove-value-icon fa fa-times"\n        tabindex="' +
((__t = ( ctx.inputAttributes.tabindex )) == null ? '' : __t) +
'"\n        ref="' +
((__t = ( ctx.ref.removeValueIcon )) == null ? '' : __t) +
'"\n      ></i>\n    ';
 } ;
__p += '\n  </div>\n';
 } ;
__p += '\n';
 if (ctx.self.manualModeEnabled) { ;
__p += '\n  <div class="usa-checkbox">\n    <input\n      id="cb-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n      ref="' +
((__t = ( ctx.ref.modeSwitcher )) == null ? '' : __t) +
'"\n      type="checkbox"\n      class="usa-checkbox__input"\n      ';
 if (ctx.mode.manual) { ;
__p += 'checked=true';
 } ;
__p += '\n      ';
 if (ctx.disabled) { ;
__p += 'disabled=true';
 } ;
__p += '\n    ></input>\n    <label\n      class="usa-checkbox__label padding-left-0 text-indent-0"\n      for="cb-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n    >\n      ' +
((__t = ( ctx.component.switchToManualModeLabel )) == null ? '' : __t) +
'\n    </label>\n  </div>\n';
 } ;
__p += '\n';
 if (ctx.self.manualMode) { ;
__p += '\n  <div ref="' +
((__t = ( ctx.nestedKey )) == null ? '' : __t) +
'">\n    ' +
((__t = ( ctx.children )) == null ? '' : __t) +
'\n  </div>\n';
 } ;
__p += '\n';
return __p
}