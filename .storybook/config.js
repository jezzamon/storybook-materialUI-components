import {
  configure,
  setAddon,
  addDecorator,
  addParameters,
} from '@storybook/react';
import requireContext from 'require-context.macro';
import JSXAddon from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { muiTheme } from 'storybook-addon-material-ui';
import darkTheme from '../src/darkTheme';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    theme: themes.dark,
  },
});

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(muiTheme([darkTheme]));
setAddon(JSXAddon);
// const req = require.context('../src/', true, /.stories.js$/);
const req = requireContext('../src/', true, /\.stories\.js$/);

function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
