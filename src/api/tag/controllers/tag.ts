export default {
  async find(ctx) {
    const entities = await strapi.entityService.findMany('api::tag.tag', {
      ...ctx.query,
      populate: {
        articles: {
          populate: {
            featuredImage: true,
            author: true
          }
        }
      }
    });
    return entities;
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.findOne('api::tag.tag', id, {
      ...ctx.query,
      populate: {
        articles: {
          populate: {
            featuredImage: true,
            author: true
          }
        }
      }
    });
    return entity;
  },

  async create(ctx) {
    const entity = await strapi.entityService.create('api::tag.tag', {
      ...ctx.request.body
    });
    return entity;
  },

  async update(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.update('api::tag.tag', id, {
      ...ctx.request.body
    });
    return entity;
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::tag.tag', id);
    return entity;
  },
};
