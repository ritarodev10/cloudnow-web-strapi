export default {
  async find(ctx) {
    const entities = await strapi.entityService.findMany('api::category.category', {
      ...ctx.query,
      populate: {
        icon: true,
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
    const entity = await strapi.entityService.findOne('api::category.category', id, {
      ...ctx.query,
      populate: {
        icon: true,
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
    const entity = await strapi.entityService.create('api::category.category', {
      ...ctx.request.body
    });
    return entity;
  },

  async update(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.update('api::category.category', id, {
      ...ctx.request.body
    });
    return entity;
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::category.category', id);
    return entity;
  },
};
