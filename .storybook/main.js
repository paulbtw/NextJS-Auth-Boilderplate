module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links",
    "@storybook/addon-knobs/register",
    "@storybook/addon-storysource/register",
    "storybook-addon-styled-component-theme/dist/register",
    "@storybook/addon-viewport/register",
  ],
}