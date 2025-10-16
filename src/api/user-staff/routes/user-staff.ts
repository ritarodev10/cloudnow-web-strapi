export default {
  routes: [
    {
      method: 'GET',
      path: '/user-staffs',
      handler: 'user-staff.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/user-staffs/:id',
      handler: 'user-staff.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/user-staffs',
      handler: 'user-staff.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/user-staffs/:id',
      handler: 'user-staff.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/user-staffs/:id',
      handler: 'user-staff.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
