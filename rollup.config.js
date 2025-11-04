import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json' with { type: 'json' };

export default {
  input: 'src/index.ts',
  external: ['@pulumi/pulumi'],
  plugins: [typescript()],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
  ],
}
