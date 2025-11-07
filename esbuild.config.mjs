/* © 2025 cloudxs GmbH. All rights reserved. / esbuild.config.mjs */

import { build } from 'esbuild';
import pkg from './package.json' with { type: 'json' };

build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: pkg.main,
  sourcemap: true,
  platform: 'node',
  external: ['@pulumi/pulumi'],
  format: 'cjs',
  target: 'esnext',
  tsconfig: 'tsconfig.json',
}).catch(() => process.exit(1));
