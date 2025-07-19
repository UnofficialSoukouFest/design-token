import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: ['node 18'],
    },
    {
      format: 'cjs',
      syntax: ['node 18'],
    },
  ],
  output: {
    target: "web",
    distPath: {
      root: "build/dist"
    }
  },
  source: {
    tsconfigPath: "./tsconfig.json",
    entry: {
      index: "build/ts/index.ts"
    },
  }
});
