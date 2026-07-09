import { Components } from '@formio/js';
import editForm from './Radio.form';

const RadioComponent = Components.components.radio;

RadioComponent.editForm = editForm;

const render = RadioComponent.prototype.render;

// GOTCHA(G-US02)
RadioComponent.prototype.render = function () {
  this.noField = true;
  return render.call(this);
};

export default RadioComponent;
