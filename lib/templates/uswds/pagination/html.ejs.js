Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div class="display-flex flex-justify-start flex-align-center margin-left-auto" role="toolbar" aria-label="Pagination" style="font-size: 13px" ' +
((__t = (ctx.component.showAddBtn ? 'style="width: 95%;"' : 'style="width: 100%;"')) == null ? '' : __t) +
'>\n    <div style="width: auto; margin-top: 0" class="input-group margin-x-1">\n        <div class="display-flex">\n            <span>Items per page:</span>\n        </div>\n        <select ref="itemsPerPage" class="margin-x-05" style="border: none;\n        border-bottom: 1px solid black; outline: none; cursor: pointer; margin-right: 10px">\n            <option value="5">5</option>\n            <option value="10">10</option>\n            <option value="25">25</option>\n            <option value="50">50</option>\n            <option value="100">100</option>\n            <option value="-1">All</option>\n        </select>\n    </div>\n    <span ref="itemsCount" class="items-count padding-05">\n        ' +
((__t = ( ctx.itemsCount )) == null ? '' : __t) +
'\n      </span>\n    <button ref="firstPage" aria-label="to the first page" type="button" class="usa-button usa-button--unstyled padding-x-105 padding-y-05">\n        <span aria-hidden="true" style="font-size: x-large">&laquo;</span>\n    </button>\n    <button ref="prevPage" aria-label="previous page" type="button" class="usa-button usa-button--unstyled padding-x-105 padding-y-05">\n        <span aria-hidden="true" style="font-size: x-large">&lsaquo;</span>\n    </button>\n    <button ref="nextPage" aria-label="next page" type="button" class="usa-button usa-button--unstyled padding-x-105 padding-y-05">\n        <span aria-hidden="true" style="font-size: x-large">&rsaquo;</span>\n    </button>\n    <button ref="lastPage"  aria-label="to the last page" type="button" class="usa-button usa-button--unstyled padding-x-105 padding-y-05">\n        <span aria-hidden="true" style="font-size: x-large">&raquo;</span>\n    </button>\n</div>\n';
return __p
}