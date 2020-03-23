const path = require('path');

module.exports = {
  stories: ['./../app/**/*.(story|stories).(ts|mdx)'],
  // stories: ['./../app/**/*.(story|stories).(ts)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        vueDocgenOptions: {
          alias: {
            '@': path.resolve(__dirname, '../app/'),
            '~': path.resolve(__dirname, '../'),
          },
        },
      },
    },
    '@storybook/addon-storysource',
    'storybook-addon-designs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-options',
    '@storybook/addon-backgrounds',
    '@storybook/addon-a11y',
    '@storybook/addon-contexts',
  ],
};
