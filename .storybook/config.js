import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withA11y);

addParameters({
  options: {
    theme: {
      brandTitle: 'Test'
    }
  }
});

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
