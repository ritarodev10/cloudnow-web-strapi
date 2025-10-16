export default {
  async find(ctx) {
    const entity = await strapi.entityService.findMany('api::global-setting.global-setting', {
      ...ctx.query,
      populate: {
        header: {
          populate: {
            logo: true,
            navigation: {
              populate: {
                dropdownItems: true
              }
            },
            ctaButton: true
          }
        },
        footer: {
          populate: {
            companyInfo: {
              populate: {
                logo: true
              }
            },
            offices: {
              populate: {
                offices: true,
                contactInfo: {
                  populate: {
                    phoneNumbers: true,
                    email: true,
                    socialLinks: true
                  }
                }
              }
            },
            quickLinks: {
              populate: {
                links: true
              }
            },
            newsletter: true,
            bottomBar: {
              populate: {
                links: true
              }
            }
          }
        }
      }
    });
    return entity;
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.findOne('api::global-setting.global-setting', id, {
      ...ctx.query,
      populate: {
        header: {
          populate: {
            logo: true,
            navigation: {
              populate: {
                dropdownItems: true
              }
            },
            ctaButton: true
          }
        },
        footer: {
          populate: {
            companyInfo: {
              populate: {
                logo: true
              }
            },
            offices: {
              populate: {
                offices: true,
                contactInfo: {
                  populate: {
                    phoneNumbers: true,
                    email: true,
                    socialLinks: true
                  }
                }
              }
            },
            quickLinks: {
              populate: {
                links: true
              }
            },
            newsletter: true,
            bottomBar: {
              populate: {
                links: true
              }
            }
          }
        }
      }
    });
    return entity;
  },

  async create(ctx) {
    const entity = await strapi.entityService.create('api::global-setting.global-setting', {
      ...ctx.request.body,
      populate: {
        header: {
          populate: {
            logo: true,
            navigation: {
              populate: {
                dropdownItems: true
              }
            },
            ctaButton: true
          }
        },
        footer: {
          populate: {
            companyInfo: {
              populate: {
                logo: true
              }
            },
            offices: {
              populate: {
                offices: true,
                contactInfo: {
                  populate: {
                    phoneNumbers: true,
                    email: true,
                    socialLinks: true
                  }
                }
              }
            },
            quickLinks: {
              populate: {
                links: true
              }
            },
            newsletter: true,
            bottomBar: {
              populate: {
                links: true
              }
            }
          }
        }
      }
    });
    return entity;
  },

  async update(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.update('api::global-setting.global-setting', id, {
      ...ctx.request.body,
      populate: {
        header: {
          populate: {
            logo: true,
            navigation: {
              populate: {
                dropdownItems: true
              }
            },
            ctaButton: true
          }
        },
        footer: {
          populate: {
            companyInfo: {
              populate: {
                logo: true
              }
            },
            offices: {
              populate: {
                offices: true,
                contactInfo: {
                  populate: {
                    phoneNumbers: true,
                    email: true,
                    socialLinks: true
                  }
                }
              }
            },
            quickLinks: {
              populate: {
                links: true
              }
            },
            newsletter: true,
            bottomBar: {
              populate: {
                links: true
              }
            }
          }
        }
      }
    });
    return entity;
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::global-setting.global-setting', id);
    return entity;
  },
};
