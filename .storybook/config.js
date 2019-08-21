import { configure, setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { muiTheme } from 'storybook-addon-material-ui';
import darkTheme from '../src/darkTheme';

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(muiTheme([darkTheme]));
setAddon(JSXAddon);
const req = require.context('../src/', true, /.stories.js$/);

function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(file => req(file));
}

configure(loadStories, module);
