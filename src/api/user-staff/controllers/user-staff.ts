export default {
  async find(ctx) {
    const entities = await strapi.entityService.findMany('api::user-staff.user-staff', {
      ...ctx.query,
      populate: {
        avatar: true,
        userRole: true,
        author: {
          populate: {
            avatar: true
          }
        }
      }
    });
    return entities;
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.findOne('api::user-staff.user-staff', id, {
      ...ctx.query,
      populate: {
        avatar: true,
        userRole: true,
        author: {
          populate: {
            avatar: true
          }
        }
      }
    });
    return entity;
  },

  async create(ctx) {
    const entity = await strapi.entityService.create('api::user-staff.user-staff', {
      ...ctx.request.body,
      populate: {
        avatar: true,
        userRole: true
      }
    });
    return entity;
  },

  async update(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.update('api::user-staff.user-staff', id, {
      ...ctx.request.body,
      populate: {
        avatar: true,
        userRole: true
      }
    });
    return entity;
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::user-staff.user-staff', id);
    return entity;
  },
};
