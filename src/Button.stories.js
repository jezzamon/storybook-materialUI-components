import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { color } from '@storybook/addon-knobs/react';
import { text } from '@storybook/addon-knobs/react';

storiesOf('Button', module)
  .addWithJSX('with background', () => (
    <Button bg={color('bg', 'palegoldenrod', 'group1')}>Hello world</Button>
  ))
  .addWithJSX('another background', () => (
    <Button bg={text('bg', `tomato`)}>Hello world</Button>
  ));

Button.propTypes = {
  bg: PropTypes.string.isRequired,
};
