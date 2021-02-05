import { Components } from 'formiojs';

const RadioComponent = Components.components.radio;

const render = RadioComponent.prototype.render;

RadioComponent.prototype.render = function() {
  this.noField = true;
  return render.call(this);
}

export default RadioComponent;
