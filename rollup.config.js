import svelte from 'rollup-plugin-svelte';
import nodeResolve  from '@rollup/plugin-node-resolve';
import html from 'rollup-plugin-html'

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
}