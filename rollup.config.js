import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

import pkg from './package.json'

const input = 'src/index.js'
const external = id => !id.startsWith('.') && !id.startsWith('/')
const plugins = [
  babel({
    exclude: 'node_modules/**',
  }),
  resolve(),
]

export default [
  {
    input,
    output: { file: pkg.main, format: 'cjs' },
    plugins: [...plugins, commonjs()],
    external,
  },
  {
    input,
    output: { file: pkg.module, format: 'es' },
    plugins,
    external,
  },
]
