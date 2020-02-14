import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

import { main } from './package.json'

export default {
  input: 'src/index.js',
  output: { file: main, format: 'cjs' },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
    commonjs(),
  ],
  external: id => /^react|prop-types/.test(id),
}
