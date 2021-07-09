export default [
  {
    type: 'select',
    key: 'theme',
    overrideEditForm: true,
    label: 'Theme',
    input: true,
    tooltip: 'The color theme of this button.',
    dataSrc: 'values',
    weight: 140,
    data: {
      values: [
        { label: 'Default', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Accent Cool', value: 'accent-cool' },
        { label: 'Base', value: 'base' },
        { label: 'Outline', value: 'outline' },
      ],
    },
  },
];
