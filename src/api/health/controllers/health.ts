export default {
  async index(ctx: any) {
    ctx.body = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'strapi-cms'
    };
  }
};