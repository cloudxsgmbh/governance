/* © 2025 cloudxs GmbH. All rights reserved. / esbuild.config.mjs */

import { build } from 'esbuild';
import pkg from './package.json' with { type: 'json' };

const entryPoints = ['src/index.ts'];

async function buildProject() {
  // Build for CommonJS
  await build({
    entryPoints,
    bundle: true,
    outfile: pkg.main,
    sourcemap: true,
    platform: 'node',
    format: 'cjs',
    target: 'esnext',
    tsconfig: 'tsconfig.json',
    external: Object.keys(pkg.peerDependencies || {}),
  });

  // Build for ESM
  await build({
    entryPoints,
    bundle: true,
    outfile: pkg.module,
    sourcemap: true,
    platform: 'node',
    format: 'esm',
    target: 'esnext',
    tsconfig: 'tsconfig.json',
    external: Object.keys(pkg.peerDependencies || {}),
  });
}

buildProject().catch(() => process.exit(1));
