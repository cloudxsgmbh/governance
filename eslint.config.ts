/* © 2025 cloudxs GmbH. All rights reserved. / eslint.config.ts */

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

import { defineConfig } from 'eslint/config';

export default defineConfig(
  {
    name: 'global-ignore',
    ignores: [
      '**/*.d.ts',
      '**/node_modules/',
      '.git/',
      '**/dist/',
      'tmp/',
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
);