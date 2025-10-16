export default {
  routes: [
    {
      method: 'GET',
      path: '/user-roles',
      handler: 'user-role.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/user-roles/:id',
      handler: 'user-role.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/user-roles',
      handler: 'user-role.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/user-roles/:id',
      handler: 'user-role.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/user-roles/:id',
      handler: 'user-role.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
