import { StyleDictionary } from 'style-dictionary-utils'

const myStyleDictionary = new StyleDictionary()

const extendedSd = await myStyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    ts: {
      transforms: ['color/hexAlpha', 'shadow/css'],
      buildPath: 'build/ts/',
      files: [
        {
          filter: 'isSource',
          destination: 'tokens.ts',
          format: 'javascript/esm',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
})

await extendedSd.buildAllPlatforms()
