import { Components } from '@formio/js';
import editForm from './SelectBoxes.form';

const SelectBoxesComponent = Components.components.selectboxes;

export default class USWDSSelectBoxesComponent extends SelectBoxesComponent {
  public static editForm = editForm
}
