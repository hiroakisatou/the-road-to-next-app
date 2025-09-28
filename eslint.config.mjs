import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});



const eslintConfig = [
  ...compat.config({
    extends: {
      'next/core-web-vitals',
      'next/typescript',
      'prettier',
    },
    ignores: {
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'src/app/global.css',
    },
  }),
];

eslintConfig.push({
  settings: {
    tailwindcss: {
      // Attributes/props that could contain Tailwind CSS classes...
      // Optional, default values: ["class", "className", "ngClass", "@apply"]
      attributes: ["class", "className", "ngClass", "@apply"],
      // The absolute path pointing to you main Tailwind CSS v4 config file.
      // It must be a `.css` file (v4), not a `.js` file (v3)
      // REQUIRED, default value will not help
      cssConfigPath: dirname(fileURLToPath(import.meta.url)) + "src/app/global.css",
      // Functions/tagFunctions that will be parsed by the plugin.
      // Optional, default values: ["classnames", "clsx", "ctl", "cva", "tv", "tw"]
      functions: ["twClasses", "classnames", "clsx", "ctl", "cva", "tv", "tw"]
    },
  }
});

export default eslintConfig;
