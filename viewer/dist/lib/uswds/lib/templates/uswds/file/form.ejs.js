Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (!ctx.component.image) { ;
__p += '\n<ul class="usa-list usa-list--unstyled">\n  <li class="position-relative display-block padding-105 border-1px">\n    <div class="grid-row">\n      ';
 if (!ctx.disabled) { ;
__p += '\n      <div class="tablet:grid-col-1"></div>\n      ';
 } ;
__p += '\n      <div class="tablet:grid-col-';
 if (ctx.self.hasTypes) { ;
__p += '7';
 } else { ;
__p += '9';
 } ;
__p += '"><strong>' +
((__t = (ctx.t('File Name'))) == null ? '' : __t) +
'</strong></div>\n      <div class="tablet:grid-col-2"><strong>' +
((__t = (ctx.t('Size'))) == null ? '' : __t) +
'</strong></div>\n      ';
 if (ctx.self.hasTypes) { ;
__p += '\n        <div class="tablet:grid-col-2"><strong>' +
((__t = (ctx.t('Type'))) == null ? '' : __t) +
'</strong></div>\n      ';
 } ;
__p += '\n    </div>\n  </li>\n  ';
 ctx.files.forEach(function(file) { ;
__p += '\n  <li class="position-relative display-block padding-105 border-1px margin-top-neg-1px">\n    <div class="grid-row">\n      ';
 if (!ctx.disabled) { ;
__p += '\n      <div class="tablet:grid-col-1"><i class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'" ref="removeLink"></i></div>\n      ';
 } ;
__p += '\n      <div class="tablet:grid-col-';
 if (ctx.self.hasTypes) { ;
__p += '7';
 } else { ;
__p += '9';
 } ;
__p += '">\n        ';
 if (ctx.component.uploadOnly) { ;
__p += '\n          ' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'\n        ';
 } else { ;
__p += '\n          <a href="' +
((__t = (file.url)) == null ? '' : __t) +
'" target="_blank" ref="fileLink">' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'</a>\n        ';
 } ;
__p += '\n      </div>\n      <div class="tablet:grid-col-2">' +
((__t = (ctx.fileSize(file.size))) == null ? '' : __t) +
'</div>\n      ';
 if (ctx.self.hasTypes) { ;
__p += '\n        <div class="tablet:grid-col-2">\n          <select class="file-type">\n            ';
 ctx.component.fileTypes.map(function(type) { ;
__p += '\n              <option class="test" value="' +
((__t = ( type.value )) == null ? '' : __t) +
'" ';
 if (type.value === file.fileType) { ;
__p += 'selected="selected"';
 } ;
__p += '>' +
((__t = ( type.label )) == null ? '' : __t) +
'</option>\n            ';
 }); ;
__p += '\n          </select>\n        </div>\n      ';
 } ;
__p += '\n    </div>\n  </li>\n  ';
 }) ;
__p += '\n</ul>\n';
 } else { ;
__p += '\n<div>\n  ';
 ctx.files.forEach(function(file) { ;
__p += '\n  <div>\n    <span>\n      <img ref="fileImage" src="" alt="' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'" style="width:' +
((__t = (ctx.component.imageSize)) == null ? '' : __t) +
'px" />\n      ';
 if (!ctx.disabled) { ;
__p += '\n      <i class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'" ref="removeLink"></i>\n      ';
 } ;
__p += '\n    </span>\n  </div>\n  ';
 }) ;
__p += '\n</div>\n';
 } ;
__p += '\n';
 if (!ctx.disabled && (ctx.component.multiple || !ctx.files.length)) { ;
__p += '\n<input type="file" style="opacity: 0; position: absolute;" tabindex="-1" ref="hiddenFileInputElement">\n';
 if (ctx.self.useWebViewCamera) { ;
__p += '\n<div class="fileSelector">\n  <button class="usa-button usa-button--accent-cool" ref="galleryButton"><i class="fa fa-book"></i> ' +
((__t = (ctx.t('Gallery'))) == null ? '' : __t) +
'</button>\n  <button class="usa-button usa-button--accent-cool" ref="cameraButton"><i class="fa fa-camera"></i> ' +
((__t = (ctx.t('Camera'))) == null ? '' : __t) +
'</button>\n</div>\n';
 } else if (!ctx.self.cameraMode) { ;
__p += '\n<div class="fileSelector" ref="fileDrop">\n  <i class="' +
((__t = (ctx.iconClass('cloud-upload'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('Drop files to attach,'))) == null ? '' : __t) +
'\n    ';
 if (ctx.component.image) { ;
__p += '\n      <a href="#" ref="toggleCameraMode"><i class="fa fa-camera"></i> ' +
((__t = (ctx.t('Use Camera,'))) == null ? '' : __t) +
'</a>\n    ';
 } ;
__p += '\n    ' +
((__t = (ctx.t('or'))) == null ? '' : __t) +
' <a href="#" ref="fileBrowse" class="browse">' +
((__t = (ctx.t('browse'))) == null ? '' : __t) +
'</a>\n</div>\n';
 } else { ;
__p += '\n<div>\n  <video class="video" autoplay="true" ref="videoPlayer"></video>\n  <canvas style="display: none" ref="videoCanvas"></canvas>\n</div>\n<button class="usa-button usa-button--accent-cool" ref="takePictureButton"><i class="fa fa-camera"></i> ' +
((__t = (ctx.t('Take Picture'))) == null ? '' : __t) +
'</button>\n<button class="usa-button usa-button--accent-cool" ref="toggleCameraMode">' +
((__t = (ctx.t('Switch to file upload'))) == null ? '' : __t) +
'</button>\n';
 } ;
__p += '\n';
 } ;
__p += '\n';
 ctx.statuses.forEach(function(status) { ;
__p += '\n<div class="file ' +
((__t = (ctx.statuses.status === 'error' ? 'usa-has-error' : '')) == null ? '' : __t) +
'">\n  <div class="grid-row">\n    <div class="fileName mobile:grid-col-10">' +
((__t = (status.originalName)) == null ? '' : __t) +
' <i class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'" ref="fileStatusRemove"></i></div>\n    <div class="fileSize mobile:grid-col-2 text-right">' +
((__t = (ctx.fileSize(status.size))) == null ? '' : __t) +
'</div>\n  </div>\n  <div class="grid-row">\n    <div class="mobile:grid-col-12">\n      ';
 if (status.status === 'progress') { ;
__p += '\n      <div class="progress">\n        <div class="progress-bar" role="progressbar" aria-valuenow="' +
((__t = (status.progress)) == null ? '' : __t) +
'" aria-valuemin="0" aria-valuemax="100" style="width: ' +
((__t = (status.progress)) == null ? '' : __t) +
'">\n          <span class="usa-sr-only">' +
((__t = (status.progress)) == null ? '' : __t) +
'% ' +
((__t = (ctx.t('Complete'))) == null ? '' : __t) +
'</span>\n        </div>\n      </div>\n      ';
 } else { ;
__p += '\n      <div class="\n        ';
 if (status.status === 'success') { ;
__p += ' bg-green ';
 } ;
__p += '\n        ';
 if (status.status === 'info') { ;
__p += ' bg-cyan ';
 } ;
__p += '\n        ';
 if (status.status === 'warning') { ;
__p += ' bg-gold ';
 } ;
__p += '\n        ';
 if (status.status === 'danger') { ;
__p += ' bg-red ';
 } ;
__p += '\n      ">' +
((__t = (JSON.stringify(status.message))) == null ? '' : __t) +
'</div>\n      ';
 } ;
__p += '\n    </div>\n  </div>\n</div>\n';
 }) ;
__p += '\n';
 if (!ctx.component.storage || ctx.support.hasWarning) { ;
__p += '\n<div class="usa-alert usa-alert--warning">\n  <div class="usa-alert__body">\n    ';
 if (!ctx.component.storage) { ;
__p += '\n      <p>' +
((__t = (ctx.t('No storage has been set for this field. File uploads are disabled until storage is set up.'))) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n    ';
 if (!ctx.support.filereader) { ;
__p += '\n      <p>' +
((__t = (ctx.t('File API & FileReader API not supported.'))) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n    ';
 if (!ctx.support.formdata) { ;
__p += '\n      <p>' +
((__t = (ctx.t("XHR2's FormData is not supported."))) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n    ';
 if (!ctx.support.progress) { ;
__p += '\n      <p>' +
((__t = (ctx.t("XHR2's upload progress isn't supported."))) == null ? '' : __t) +
'</p>\n    ';
 } ;
__p += '\n  </div>\n</div>\n';
 } ;
__p += '\n';
return __p
}