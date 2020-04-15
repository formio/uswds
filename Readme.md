# Form.io United States Web Design System Templates

This repository will change the rendering of forms in formio.js so that it uses html and classes compatible with the [United States Web Design System](https://designsystem.digital.gov/) framework.

## Usage

```javascript
import uswds from '@formio/uswds';
import { Formio } from 'formiojs';
Formio.use(uswds);
```

Or if you would like to embed directly within your website, you can use the following.

```html
<html>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uswds/2.6.0/css/uswds.min.css">
        <link rel="stylesheet" href="https://cdn.form.io/formiojs/formio.full.min.css">
        <link rel="stylesheet" href="dist/uswds.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uswds/2.6.0/js/uswds.min.js"></script>
        <script src="https://cdn.form.io/formiojs/formio.full.min.js"></script>
        <script src="dist/uswds.js"></script>
    </head>
    <body>
        <div id="formio"></div>
        <script type="text/javascript">
            Formio.use(uswds);
            Formio.createForm(document.getElementById('formio'), 'https://examples.form.io/example');
        </script>
    </body>
</html>
```

## Form Builder
In addition to being a Form Renderer, you can also use this library to embed the Form.io Form Builder within your own application using the following.

```html
<html>
    <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uswds/2.6.0/css/uswds.min.css">
        <link rel="stylesheet" href="https://cdn.form.io/formiojs/formio.full.min.css">
        <link rel="stylesheet" href="dist/uswds.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uswds/2.6.0/js/uswds.min.js"></script>
        <script src="https://cdn.form.io/formiojs/formio.full.min.js"></script>
        <script src="dist/uswds.js"></script>
    </head>
    <body>
        <div id="builder"></div>
        <script type="text/javascript">
            Formio.use(uswds);
            Formio.builder(document.getElementById('builder'));
        </script>
    </body>
</html>
```

## Example Application
For an example of how this platform works, please see the following application.

[https://formio.github.io/uswds](https://formio.github.io/uswds)
