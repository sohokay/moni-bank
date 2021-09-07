const Controller = require('egg').Controller;
class PostController extends Controller {
  async index() {
    // this.ctx.body='1111111111'
    this.ctx.body = await this.ctx.model.Post.findAll({
      // attributes: [ 'id', 'user_id' ],
      // include: { model: this.ctx.model.User, as: 'user' },
      // where: { status: 'publish' },
      // order: 'id desc',
    });
  }

  async show() {
    const post = await this.ctx.model.Post.findByPk(this.params.id);
    const user = await post.getUser();
    post.setDataValue('user', user);
    this.ctx.body = post;
  }

  async destroy() {
    const post = await this.ctx.model.Post.findByPk(this.params.id);
    await post.destroy();
    this.ctx.body = { success: true };
  }
}
module.exports =PostController
