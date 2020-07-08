import { Formio } from 'formiojs/formio.form.js';
import USWDS from '@formio/uswds';
import VPAT from '@formio/vpat';
import Premium from '@formio/premium';
USWDS.version = __VERSION__;
Formio.USWDS = USWDS;

// Use modules.
Formio.use([USWDS, VPAT, Premium]);
Formio.Templates.framework = 'uswds';
