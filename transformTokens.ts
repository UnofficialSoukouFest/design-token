import { StyleDictionary } from 'style-dictionary-utils'
import { transformTypes } from 'style-dictionary/enums'

StyleDictionary.registerTransform({
  name: 'radiusIntoPx',
  type: transformTypes.value,
  transitive: true,
  filter: (token) => {
    return token.path.includes('radius')
  },
  transform: (token) => {
    return `${parseInt(token.value).toString()}px`
  }
})

StyleDictionary.registerTransform({
  name: 'spaceIntoPx',
  type: transformTypes.value,
  transitive: true,
  filter: (token) => {
    return token.path.includes('space')
  },
  transform: (token) => {
    return `${parseInt(token.value).toString()}px`
  }
})

StyleDictionary.registerTransform({
  name: 'fontWeightIntoNumber',
  type: transformTypes.value,
  transitive: true,
  filter: (token) => {
    return token.path.includes('weight')
  },
  transform: (token) => {
    return `${parseInt(token.value).toString()}`
  }
})

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
          destination: 'index.ts',
          format: 'javascript/esm',
        },
      ],
    },
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      transforms: ['spaceIntoPx', 'radiusIntoPx', 'fontWeightIntoNumber'],
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
