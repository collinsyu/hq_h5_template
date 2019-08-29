import path from "path";

export default {

  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dynamicImport: {
        webpackChunkName: true,
      },
    }],
  ],
  hash: true,
  exportStatic: {
    "htmlSuffix": true
  },
  history: 'hash',
  alias: {
    '@':path.resolve(__dirname, '.src'),
    'utils': path.resolve(__dirname, 'src/utils/'),
  },
  publicPath: "/",
}
