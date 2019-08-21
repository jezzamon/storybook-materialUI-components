// in src/Avatar.stories.js
import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';

const userWithAvatar = {
  email: 'jerrelunia@gmail.com',
};

const userWithNoAvatar = {
  email: 'lelafeng@example.com',
};

storiesOf('Avatar', module)
  .addWithJSX('basic', () => <Avatar user={userWithAvatar} />)
  .addWithJSX('using fallback', () => <Avatar user={userWithNoAvatar} />)
  .addWithJSX('anonymous', () => <Avatar />);
