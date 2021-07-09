import { Components } from 'formiojs';
const baseEditForm = (Components as any).components.button.editForm;

import ButtonEditDisplay from './editForm/Button.edit.display';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: ButtonEditDisplay,
    },
  ], ...extend);
}
