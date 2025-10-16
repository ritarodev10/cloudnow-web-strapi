export default {
  routes: [
    {
      method: 'GET',
      path: '/global-settings',
      handler: 'global-settings.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/global-settings/:id',
      handler: 'global-settings.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/global-settings',
      handler: 'global-settings.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/global-settings/:id',
      handler: 'global-settings.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/global-settings/:id',
      handler: 'global-settings.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
