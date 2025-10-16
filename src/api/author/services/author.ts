export default ({ strapi }) => ({
  async findMany(entity, params) {
    return strapi.entityService.findMany(entity, params);
  },

  async findOne(entity, id, params) {
    return strapi.entityService.findOne(entity, id, params);
  },

  async create(entity, params) {
    return strapi.entityService.create(entity, params);
  },

  async update(entity, id, params) {
    return strapi.entityService.update(entity, id, params);
  },

  async delete(entity, id) {
    return strapi.entityService.delete(entity, id);
  },
});
