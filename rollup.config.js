// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'foo'
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};