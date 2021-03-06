module.exports = {
  stories: [
    '../src/slices/**/*.stories.js',
    '../src/components/**/*.stories.js',
    '../src/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    'storybook-addon-color-mode/register',
  ],
}
