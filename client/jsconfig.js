module.exports = {
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '@': ['./src'],
      '@pages': ['./src/pages'],
      '@components': ['./src/components'],
      '@constants': ['./src/constants'],
      '@utils': ['./utils']
    }
  },
  exclude: ['dist', 'node_modules']
}
