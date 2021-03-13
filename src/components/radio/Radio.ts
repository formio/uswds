import { Components } from 'formiojs';
import editForm from './Radio.form';

const RadioComponent = Components.components.radio;

RadioComponent.editForm = editForm;

const render = RadioComponent.prototype.render;

RadioComponent.prototype.render = function() {
  this.noField = true;
  return render.call(this);
}

export default RadioComponent;
