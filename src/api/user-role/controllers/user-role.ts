export default {
  async find(ctx) {
    const entities = await strapi.entityService.findMany('api::user-role.user-role', {
      ...ctx.query,
      populate: {
        userStaffs: {
          populate: {
            avatar: true,
            author: true
          }
        }
      }
    });
    return entities;
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.findOne('api::user-role.user-role', id, {
      ...ctx.query,
      populate: {
        userStaffs: {
          populate: {
            avatar: true,
            author: true
          }
        }
      }
    });
    return entity;
  },

  async create(ctx) {
    const entity = await strapi.entityService.create('api::user-role.user-role', {
      ...ctx.request.body
    });
    return entity;
  },

  async update(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.update('api::user-role.user-role', id, {
      ...ctx.request.body
    });
    return entity;
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::user-role.user-role', id);
    return entity;
  },
};
