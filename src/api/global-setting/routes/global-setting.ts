export default {
  routes: [
    {
      method: 'GET',
      path: '/global-settings',
      handler: 'global-setting.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/global-settings/:id',
      handler: 'global-setting.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/global-settings',
      handler: 'global-setting.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/global-settings/:id',
      handler: 'global-setting.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/global-settings/:id',
      handler: 'global-setting.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
