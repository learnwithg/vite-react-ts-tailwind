const { mergeConfig } = require('vite')
const { default: tsconfigPaths } = require('vite-tsconfig-paths')

module.exports = {
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
      resolve: {
        alias: { foo: 'bar' }
      }
    })
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs',
    '@storybook/addon-interactions'
  ],
  features: {
    interactionsDebugger: true
  },
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  }
}
