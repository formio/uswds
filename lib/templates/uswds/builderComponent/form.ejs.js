Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div aria-label="' +
((__t = (ctx.childComponent.label)) == null ? '' : __t) +
' ' +
((__t = (ctx.childComponent.type)) == null ? '' : __t) +
' container" class="builder-component" ref="dragComponent" tabindex="0">\n  ';
 if (!ctx.disableBuilderActions) { ;
__p += '\n  <div role="application" tabindex="0" aria-label="Action buttons. Use up and down arrows to navigate through action buttons" class="component-btn-group" id="buttons-' +
((__t = (ctx.childComponent.id)) == null ? '' : __t) +
'" data-noattach="true" ref="buttonGroup">\n    <div\n      role="button"\n      aria-label="Remove button. Click to remove component from the form"\n      tabindex="-1"\n      class="usa-button usa-button--secondary component-settings-button component-settings-button-remove"\n      ref="removeComponent"\n    >\n      <i class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'"></i>\n    </div>\n    <div\n      role="button"\n      aria-label="Copy button. Click to copy component"\n      tabindex="-1"\n      class="usa-button usa-button--outline component-settings-button component-settings-button-copy"\n      ref="copyComponent"\n    >\n      <i class="' +
((__t = (ctx.iconClass('copy'))) == null ? '' : __t) +
'"></i>\n    </div>\n    <div\n      role="button"\n      aria-label="Paste below button. Click to paste component below the current component"\n      tabindex="-1"\n      class="usa-button usa-button--outline component-settings-button component-settings-button-paste"\n      ref="pasteComponent"\n    >\n      <i class="' +
((__t = (ctx.iconClass('save'))) == null ? '' : __t) +
'"></i>\n    </div>\n    <div\n      role="button"\n      aria-label="Move button"\n      tabindex="-1"\n      class="usa-button usa-button--outline component-settings-button component-settings-button-move"\n      ref="moveComponent"\n    >\n      <i class="' +
((__t = (ctx.iconClass('move'))) == null ? '' : __t) +
'"></i>\n    </div>\n    <div\n      role="button"\n      aria-label="Edit button. Click to open component settings modal window"\n      tabindex="-1"\n      class="usa-button usa-button--accent-cool component-settings-button component-settings-button-edit"\n      ref="editComponent"\n    >\n      <i class="' +
((__t = (ctx.iconClass('cog'))) == null ? '' : __t) +
'"></i>\n    </div>\n  </div>\n  ';
 } ;
__p += '\n  ' +
((__t = (ctx.html)) == null ? '' : __t) +
'\n</div>\n';
return __p
}