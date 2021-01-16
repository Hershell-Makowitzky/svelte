import svelte from 'rollup-plugin-svelte';
import nodeResolve  from '@rollup/plugin-node-resolve';

export default {
    input: "src/main.js",
    output: {
        format: 'iife',
        file: './public/bundle.js',
        name: 'Test'
    },
    plugins: [
        svelte(),
        nodeResolve(),
    ],
    input: "src/index.js",
    output: {
        format: 'html',
        file: './public/index.html',
        name: 'Test'
    }
}