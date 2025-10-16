export default {
  async find(ctx) {
    const entity = await strapi.entityService.findMany('api::global-settings.global-settings', {
      ...ctx.query,
      populate: {
        header: {
          populate: {
            logo: {
              populate: {
                logoImage: true,
                cloudIcon: true
              }
            },
            navigation: {
              populate: {
                icon: true,
                dropdownItems: {
                  populate: {
                    icon: true
                  }
                }
              }
            },
            ctaButton: {
              populate: {
                icon: true
              }
            }
          }
        },
        footer: {
          populate: {
            companyInfo: {
              populate: {
                logo: {
                  populate: {
                    logoImage: true,
                    cloudIcon: true
                  }
                }
              }
            },
            offices: {
              populate: {
                offices: {
                  populate: {
                    icon: true
                  }
                },
                contactInfo: {
                  populate: {
                    phoneNumbers: {
                      populate: {
                        icon: true
                      }
                    },
                    email: {
                      populate: {
                        icon: true
                      }
                    },
                    socialLinks: {
                      populate: {
                        icon: true
                      }
                    }
                  }
                }
              }
            },
            quickLinks: {
              populate: {
                links: {
                  populate: {
                    icon: true
                  }
                }
              }
            },
            newsletter: true,
            bottomBar: {
              populate: {
                links: {
                  populate: {
                    icon: true
                  }
                }
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
    const entity = await strapi.entityService.findOne('api::global-settings.global-settings', id, {
      ...ctx.query,
      populate: {
        header: {
          populate: {
            logo: {
              populate: {
                logoImage: true,
                cloudIcon: true
              }
            },
            navigation: {
              populate: {
                icon: true,
                dropdownItems: {
                  populate: {
                    icon: true
                  }
                }
              }
            },
            ctaButton: {
              populate: {
                icon: true
              }
            }
          }
        },
        footer: {
          populate: {
            companyInfo: {
              populate: {
                logo: {
                  populate: {
                    logoImage: true,
                    cloudIcon: true
                  }
                }
              }
            },
            offices: {
              populate: {
                offices: {
                  populate: {
                    icon: true
                  }
                },
                contactInfo: {
                  populate: {
                    phoneNumbers: {
                      populate: {
                        icon: true
                      }
                    },
                    email: {
                      populate: {
                        icon: true
                      }
                    },
                    socialLinks: {
                      populate: {
                        icon: true
                      }
                    }
                  }
                }
              }
            },
            quickLinks: {
              populate: {
                links: {
                  populate: {
                    icon: true
                  }
                }
              }
            },
            newsletter: true,
            bottomBar: {
              populate: {
                links: {
                  populate: {
                    icon: true
                  }
                }
              }
            }
          }
        }
      }
    });
    return entity;
  },

  async create(ctx) {
    const entity = await strapi.entityService.create('api::global-settings.global-settings', {
      data: ctx.request.body,
      ...ctx.query,
    });
    return entity;
  },

  async update(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.update('api::global-settings.global-settings', id, {
      data: ctx.request.body,
      ...ctx.query,
    });
    return entity;
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::global-settings.global-settings', id, {
      ...ctx.query,
    });
    return entity;
  },
};
