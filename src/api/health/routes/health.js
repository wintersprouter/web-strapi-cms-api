module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/health',
      handler: 'health.check',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};