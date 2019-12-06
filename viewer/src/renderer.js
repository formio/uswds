import { Formio, Components } from 'formiojs/formio.form.js';
import USWDS from '@formio/uswds';
import VPAT from '@formio/vpat';

// Add the date time widget.
import ViewerDateTime from './components/DateTime';
Components.setComponent('datetime', ViewerDateTime);

// Use the US Web Design Standards.
Formio.use(USWDS);

// Use VPAT module.
Formio.use(VPAT);
