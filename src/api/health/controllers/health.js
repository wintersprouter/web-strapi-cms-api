module.exports = {
  async check(ctx) {
    try {
      // 檢查資料庫連線
      const knex = strapi.db.connection;
      await knex.raw('SELECT 1');

      ctx.body = {
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV,
        database: 'connected',
        version: process.env.npm_package_version || '1.0.0'
      };
    } catch (error) {
      ctx.status = 503;
      ctx.body = {
        status: 'error',
        timestamp: new Date().toISOString(),
        error: error.message,
        database: 'disconnected'
      };
    }
  },
};