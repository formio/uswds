import { Components } from 'formiojs';
const baseEditForm = (Components as any).components.radio.editForm;

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: [
        {
          type: 'checkbox',
          input: true,
          weight: 1000,
          label: 'Tile view',
          tooltip: 'Tile view for this component',
          key: 'tileView',
        },
      ],
    },
  ], ...extend);
}
