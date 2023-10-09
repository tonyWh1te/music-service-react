const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/musicApi',
    createProxyMiddleware({
      target: 'https://api.deezer.com',
      changeOrigin: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      },
      pathRewrite: {
        '^/musicApi': '',
      },
      logLevel: 'debug',
    })
  );
};
