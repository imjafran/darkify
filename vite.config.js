// vite.config.js

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'Darken'
        },
        rollupOptions: {
            // output file will be in ES format and named exports, and will be named 'Darken'
            output: {
                exports: 'named',
                format: 'es',
                name: 'Darken',
            }
        }
    }
});