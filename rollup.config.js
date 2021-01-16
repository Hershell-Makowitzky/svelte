import svelte from 'rollup-plugin-svelte';
import nodeResolve  from '@rollup/plugin-node-resolve';

export default {
    input: "src/main.js",
    output : {
        format: 'iife',
        file: './public/bundle.js',
        name: 'Test'
    },
    plugins: [
        svelte(),
        nodeResolve(),
    ],
}