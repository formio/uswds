export default (iconset, name, spinning) => {
  if (iconset === 'bi') {
    switch (name) {
      case 'cog':
        name = 'gear';
        break;
      case 'copy':
        name = 'back';
        break;
      case 'bars':
        name = 'list';
        break;
      case 'remove':
        name = 'trash';
        break;
      case 'font':
        name = 'type';
        break;
      case 'hashtag':
        name = 'hash';
        break;
      case 'th-list':
        name = 'menu-button-wide';
        break;
      case 'dot-circle-o':
        name = 'ui-radios';
        break;
      case 'plus-square-o':
        name = 'plus-square';
        break;
      case 'minus-square-o':
        name = 'dash-square';
        break;
      case 'plus-square':
        name = 'ui-checks';
        break;
      case 'phone-square':
        name = 'phone';
        break;
      case 'home':
        name = 'house';
        break;
      case 'clock-o':
        name = 'clock';
        break;
      case 'usd':
        name = 'currency-dollar';
        break;
      case 'html5':
        name = 'file-richtext';
        break;
      case 'pencil-square-o':
        name = 'pencil-square';
        break;
      case 'columns':
        name = 'layout-three-columns';
        break;
      case 'list-alt':
        name = 'window';
        break;
      case 'th-large':
        name = 'grid-fill';
        break;
      case 'folder-o':
        name = 'folder';
        break;
      case 'square-o':
        name = 'square';
        break;
      case 'user-secret':
        name = 'person-fill-slash';
        break;
      case 'folder-open':
        name = 'folder2-open';
        break;
      case 'th':
        name = 'grid-3x3-gap-fill';
        break;
      case 'tasks':
        name = 'view-stacked';
        break;
      case 'indent':
        name = 'text-indent-left';
        break;
      case 'refresh':
        name = 'arrow-repeat';
        break;
      case 'files-o':
        name = 'files';
        break;
      case 'wpforms':
        name = 'window-stack';
        break;
      case 'cube':
        name = 'box';
        break;
      case 'cubes':
        name = 'boxes';
        break;
      case 'check-square-o':
        name = 'check-square';
        break;
      case 'plus':
        name = 'plus-lg';
        break;
      case 'question-sign':
        name = 'question-circle';
        name = 'question-circle';
        break;
      case 'remove-circle':
      case 'circle-xmark':
        name = 'x-circle';
        break;
      case 'new-window':
        name = 'window-restore';
        name = 'window-plus';
        break;
      case 'move':
        name = 'arrows';
        name = 'arrows-move';
        break;
      case 'edit':
        name = 'pencil';
        break;
      case 'time':
        name = 'clock';
        break;
      case 'video':
        name = 'camera-video';
        break;
      case 'microphone':
        name = 'mic';
        break;
      case 'folder-open':
        name = 'folder2-open';
        break;
      case 'check-circle':
        name = 'check-circle-fill';
        break;
      case 'times-circle':
        name = 'x-circle-fill';
        break;
      case 'pencil':
        name = 'pencil-fill';
        break;
      case 'minus':
        name = 'dash';
        break;
      case 'circle':
        name = 'circle-fill';
        break;
      case 'search-plus':
        name = 'zoom-in';
        break;
      case 'search-minus':
        name = 'zoom-out';
        break;
      case 'hand-paper-o':
        name = 'hand-index';
        break;
      case 'undo':
        name = 'arrow-counterclockwise';
        break;
      case 'repeat':
        name = 'arrow-clockwise';
        break;
    }
  }
  if (iconset === 'fa') {
    switch (name) {
      case 'save':
        name = 'download';
        break;
      case 'zoom-in':
        name = 'search-plus';
        break;
      case 'zoom-out':
        name = 'search-minus';
        break;
      case 'question-sign':
        name = 'question-circle';
        break;
      case 'remove-circle':
      case 'circle-xmark':
        name = 'times-circle-o';
        break;
      case 'new-window':
        name = 'window-restore';
        break;
      case 'move':
        name = 'arrows';
        break;
      case 'time':
        name = 'clock-o';
        break;
      case 'ok-sign':
        name = 'check-circle';
        break;
      case 'remove-sign':
        name = 'times-circle';
        break;
    }
  }

  return spinning
    ? `${iconset} ${iconset}-${name} ${iconset}-spin`
    : `${iconset} ${iconset}-${name}`;
};
