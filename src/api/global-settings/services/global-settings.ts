export default ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::global-settings.global-settings', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::global-settings.global-settings', id, params);
  },

  async create(params) {
    return await strapi.entityService.create('api::global-settings.global-settings', params);
  },

  async update(id, params) {
    return await strapi.entityService.update('api::global-settings.global-settings', id, params);
  },

  async delete(id, params) {
    return await strapi.entityService.delete('api::global-settings.global-settings', id, params);
  },
});
