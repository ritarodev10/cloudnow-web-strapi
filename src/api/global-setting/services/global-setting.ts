export default ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::global-setting.global-setting', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::global-setting.global-setting', id, params);
  },

  async create(params) {
    return await strapi.entityService.create('api::global-setting.global-setting', params);
  },

  async update(id, params) {
    return await strapi.entityService.update('api::global-setting.global-setting', id, params);
  },

  async delete(id, params) {
    return await strapi.entityService.delete('api::global-setting.global-setting', id, params);
  },
});
