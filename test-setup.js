// https://github.com/storybookjs/storybook/issues/1011#issuecomment-357636539
jest.mock('@storybook/addon-info', () => ({
  withInfo: () => storyFn => storyFn,
  setDefaults: () => {},
}));
