import { Formio, Components } from 'formiojs/formio.form.js';
import USWDS from '@formio/uswds';
import VPAT from '@formio/vpat';

// Use the US Web Design Standards.
Formio.use(USWDS);

// Use VPAT module.
Formio.use(VPAT);
Formio.Templates.framework = 'uswds';
