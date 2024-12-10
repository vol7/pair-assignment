import nodeConfig from '@repo/eslint-config-custom/node'

export default [
  ...nodeConfig,
  {
    files: ['src/**/*.{ts,tsx}'],
  },
]
