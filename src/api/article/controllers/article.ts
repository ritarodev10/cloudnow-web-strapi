export default {
  async find(ctx) {
    const entities = await strapi.entityService.findMany('api::article.article', {
      ...ctx.query,
      populate: {
        author: {
          populate: {
            avatar: true,
            userStaff: true
          }
        },
        category: true,
        tags: true,
        featuredImage: true,
        gallery: true,
        relatedArticles: {
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
    const entity = await strapi.entityService.findOne('api::article.article', id, {
      ...ctx.query,
      populate: {
        author: {
          populate: {
            avatar: true,
            userStaff: true
          }
        },
        category: true,
        tags: true,
        featuredImage: true,
        gallery: true,
        relatedArticles: {
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
    const entity = await strapi.entityService.create('api::article.article', {
      ...ctx.request.body,
      populate: {
        author: true,
        category: true,
        tags: true,
        featuredImage: true
      }
    });
    return entity;
  },

  async update(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.update('api::article.article', id, {
      ...ctx.request.body,
      populate: {
        author: true,
        category: true,
        tags: true,
        featuredImage: true
      }
    });
    return entity;
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::article.article', id);
    return entity;
  },
};
