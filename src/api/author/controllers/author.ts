export default {
  async find(ctx) {
    const entities = await strapi.entityService.findMany('api::author.author', {
      ...ctx.query,
      populate: {
        avatar: true,
        user: {
          populate: {
            role: true
          }
        },
        articles: {
          populate: {
            featuredImage: true,
            category: true,
            tags: true
          }
        }
      }
    });
    return entities;
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.findOne('api::author.author', id, {
      ...ctx.query,
      populate: {
        avatar: true,
        user: {
          populate: {
            role: true
          }
        },
        articles: {
          populate: {
            featuredImage: true,
            category: true,
            tags: true
          }
        }
      }
    });
    return entity;
  },

  async create(ctx) {
    const entity = await strapi.entityService.create('api::author.author', {
      ...ctx.request.body,
      populate: {
        avatar: true,
        user: true
      }
    });
    return entity;
  },

  async update(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.update('api::author.author', id, {
      ...ctx.request.body,
      populate: {
        avatar: true,
        user: true
      }
    });
    return entity;
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::author.author', id);
    return entity;
  },
};
