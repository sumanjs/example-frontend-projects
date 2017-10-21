
const path = require('path');


module.exports = {

  resolve: {
    alias: {
      fs: require.resolve('suman-browser-polyfills/modules/fs'),
      // assert: require.resolve('suman-browser-polyfills/modules/assert'),
      process: require.resolve('suman-browser-polyfills/modules/process'),
    },
    extensions: ['.js', '.ts']
  },

  // packages: {
  //   'suman-browser-polyfills': {
  //     main: require.resolve('suman-browser-polyfills'),
  //   },
  //   'suman-utils': {
  //     main: require.resolve('suman-utils'),
  //   },
  //   'suman-events': {
  //     main: require.resolve('suman-events'),
  //   },
  //   'suman-debug': {
  //     main: require.resolve('suman-debug'),
  //   }
  // },

  node: {
    assert: true,
    buffer: false,
    child_process: 'empty',
    cluster: 'empty',
    console: false,
    constants: true,
    crypto: 'empty',
    dgram: 'empty',
    dns: 'mock',
    domain: true,
    events: true,
    // fs: 'empty',
    http: true,
    https: true,
    module: 'empty',
    net: 'mock',
    os: true,
    path: true,
    process: false,
    punycode: true,
    querystring: true,
    readline: 'empty',
    repl: 'empty',
    stream: true,
    string_decoder: true,
    timers: true,
    tls: 'mock',
    tty: true,
    url: true,
    util: true,
    v8: 'mock',
    vm: true,
    zlib: 'empty',
  }
};
