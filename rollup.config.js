import obfuscator from 'rollup-obfuscator';
import analyze from 'rollup-plugin-analyzer';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import progress from 'rollup-plugin-progress';
import typescript from 'rollup-plugin-typescript2';

import obConfig from './obfuscator.config.json';
import pkg from './package.json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: ['**/__tests__/**', '__Template'],
      clean: true,
      typescript: require('ttypescript'),
      tsconfigDefaults: {
        compilerOptions: {
          plugins: [
            { transform: 'typescript-transform-paths' },
            { transform: 'typescript-transform-paths', afterDeclarations: true },
          ],
        },
      },
    }),
    commonjs({
      include: ['node_modules/**'],
      namedExports: {
        'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/lodash/lodash.js': ['merge', 'reduce', 'cloneDeep'],
      },
    }),
    progress(),
    analyze({ summaryOnly: true }),
    // obfuscator(obConfig),
  ],
};
