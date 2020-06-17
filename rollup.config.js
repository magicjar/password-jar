import babel from '@rollup/plugin-babel'

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/password-jar.js',
        format: 'umd',
        name: 'PasswordJar'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
        }),
    ],
}