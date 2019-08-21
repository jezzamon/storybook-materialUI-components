import React from 'react';

import { storiesOf } from '@storybook/react';
import MaterialComponent from './Main';

storiesOf('Main', module)
  .addWithJSX('Text Buttons', () => <MaterialComponent />)
  .addWithJSX('Outlined Buttons', () => (
    <MaterialComponent variant="outlined" />
  ))
  .addWithJSX('Contained Buttons', () => (
    <MaterialComponent variant="contained" />
  ));
