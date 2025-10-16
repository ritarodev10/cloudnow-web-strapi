export default async ({ strapi }) => {
  // Configure API permissions for all content types
  try {
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: { type: 'public' }
    });

    if (publicRole) {
      const permissions = {
        ...publicRole.permissions,
        'api::global-setting.global-setting': {
          controllers: {
            'global-setting': {
              find: { enabled: true },
              findOne: { enabled: true }
            }
          }
        },
        'api::article.article': {
          controllers: {
            'article': {
              find: { enabled: true },
              findOne: { enabled: true }
            }
          }
        },
        'api::category.category': {
          controllers: {
            'category': {
              find: { enabled: true },
              findOne: { enabled: true }
            }
          }
        },
        'api::tag.tag': {
          controllers: {
            'tag': {
              find: { enabled: true },
              findOne: { enabled: true }
            }
          }
        },
        'api::author.author': {
          controllers: {
            'author': {
              find: { enabled: true },
              findOne: { enabled: true }
            }
          }
        }
      };

      await strapi.query('plugin::users-permissions.role').update({
        where: { id: publicRole.id },
        data: { permissions }
      });

      console.log("✅ API permissions configured for public access");
    }
  } catch (error) {
    console.log("⚠️ Could not configure permissions automatically:", error.message);
  }

  // Check if global settings already exist
  const existingSettings = await strapi.entityService.findMany("api::global-setting.global-setting");

  if (!existingSettings || existingSettings.length === 0) {
    console.log("🚀 Creating initial CloudNow global settings...");

    // Create global settings with CloudNow data
    await strapi.entityService.create("api::global-setting.global-setting", {
      data: {
        siteName: "CloudNow",
        siteDescription:
          "Specialized IT consulting and cloud services customized to meet your business demands and security needs.",
        siteUrl: "https://cloudnowservices.com",
        header: {
          logo: {
            href: "/",
            companyName: "CLOUD NOW",
            showText: true,
            showIcon: true,
            iconPosition: "right",
            isExternal: false,
            target: "_self",
            ariaLabel: "CloudNow Home",
          },
          navigation: [
            {
              label: "Home",
              href: "/",
              isExternal: false,
              target: "_self",
              hasDropdown: false,
              iconPosition: "none",
              isActive: true,
              ariaLabel: "Home Page",
            },
            {
              label: "Services",
              href: "/services",
              isExternal: false,
              target: "_self",
              hasDropdown: true,
              dropdownItems: [
                {
                  label: "Cloud Consulting",
                  href: "/services/cloud-consulting",
                  isExternal: false,
                  target: "_self",
                  iconPosition: "none",
                  isActive: false,
                  ariaLabel: "Cloud Consulting Services",
                },
                {
                  label: "IT Support",
                  href: "/services/it-support",
                  isExternal: false,
                  target: "_self",
                  iconPosition: "none",
                  isActive: false,
                  ariaLabel: "IT Support Services",
                },
              ],
              iconPosition: "right",
              isActive: false,
              ariaLabel: "Services",
            },
            {
              label: "About Us",
              href: "/about",
              isExternal: false,
              target: "_self",
              hasDropdown: false,
              iconPosition: "none",
              isActive: false,
              ariaLabel: "About CloudNow",
            },
          ],
          ctaButton: {
            href: "/contact",
            label: "Get in touch",
            isExternal: false,
            target: "_self",
            rel: "noopener",
            ariaLabel: "Contact CloudNow",
            isButtonLink: true,
            type: "primary",
            size: "medium",
            iconPosition: "none",
            animation: "none",
            showOnMobile: true,
            showOnTablet: true,
            showOnDesktop: true,
          },
        },
        footer: {
          showCompanyInfo: true,
          showOffices: true,
          showQuickLinks: true,
          showNewsletter: true,
          showBottomBar: true,
          companyInfo: {
            logo: {
              href: "/",
              companyName: "CLOUD NOW",
              showText: true,
              showIcon: true,
              iconPosition: "right",
              isExternal: false,
              target: "_self",
              ariaLabel: "CloudNow Home",
            },
            description:
              "Specialized IT consulting and cloud services customized to meet your business demands and security needs.",
            copyright: "© 2025 CloudNow. All rights reserved.",
            showLogo: true,
            showDescription: true,
            showCopyright: true,
          },
          offices: {
            title: "Our Offices",
            showTitle: true,
            showOffices: true,
            showContactInfo: true,
            offices: [
              {
                country: "USA",
                address: "30 N Gould St Ste N Sheridan, WY 82801",
                showIcon: true,
                isActive: true,
              },
              {
                country: "Canada",
                address: "250 - 997 Seymour St. Vancouver, BC, Canada, V6B 3M1",
                showIcon: true,
                isActive: true,
              },
              {
                country: "Indonesia",
                address: "Jl. Mustika No. 143S Surabaya, Jawa Timur, Indonesia, 60246",
                showIcon: true,
                isActive: true,
              },
            ],
            contactInfo: {
              showPhoneNumbers: true,
              showEmail: true,
              showSocialLinks: true,
              phoneNumbers: [
                {
                  label: "CA",
                  value: "+1 604 449 5228",
                  href: "tel:+16044495228",
                  iconType: "phone",
                  isExternal: false,
                  target: "_self",
                  showIcon: true,
                  isActive: true,
                },
                {
                  label: "ID",
                  value: "+62 882 0011 43840",
                  href: "tel:+62882001143840",
                  iconType: "phone",
                  isExternal: false,
                  target: "_self",
                  showIcon: true,
                  isActive: true,
                },
              ],
              email: {
                label: "Email",
                value: "contact@cloudnowservices.com",
                href: "mailto:contact@cloudnowservices.com",
                iconType: "email",
                isExternal: false,
                target: "_self",
                showIcon: true,
                isActive: true,
              },
              socialLinks: [
                {
                  label: "LinkedIn",
                  value: "CloudNow Inc.",
                  href: "https://linkedin.com/company/cloudnow",
                  iconType: "linkedin",
                  isExternal: true,
                  target: "_blank",
                  showIcon: true,
                  isActive: true,
                },
              ],
            },
          },
          quickLinks: {
            title: "Quick Links",
            showTitle: true,
            showLinks: true,
            links: [
              {
                href: "/contact",
                label: "Contact Us",
                isExternal: false,
                target: "_self",
                rel: "noopener",
                ariaLabel: "Contact CloudNow",
                isButtonLink: false,
                iconPosition: "none",
                animation: "none",
                showOnMobile: true,
                showOnTablet: true,
                showOnDesktop: true,
              },
              {
                href: "/about",
                label: "About Us",
                isExternal: false,
                target: "_self",
                rel: "noopener",
                ariaLabel: "About CloudNow",
                isButtonLink: false,
                iconPosition: "none",
                animation: "none",
                showOnMobile: true,
                showOnTablet: true,
                showOnDesktop: true,
              },
              {
                href: "/services",
                label: "Our Services",
                isExternal: false,
                target: "_self",
                rel: "noopener",
                ariaLabel: "CloudNow Services",
                isButtonLink: false,
                iconPosition: "none",
                animation: "none",
                showOnMobile: true,
                showOnTablet: true,
                showOnDesktop: true,
              },
            ],
          },
          newsletter: {
            title: "Subscribe",
            description: "Join our newsletter to stay up to date on features and releases.",
            placeholder: "Enter your email",
            buttonText: "Subscribe",
            privacyText:
              "By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.",
            showTitle: true,
            showDescription: true,
            showPrivacyText: true,
          },
          bottomBar: {
            showSeparator: true,
            links: [
              {
                href: "/privacy-policy",
                label: "Privacy Policy",
                isExternal: false,
                target: "_self",
                rel: "noopener",
                ariaLabel: "Privacy Policy",
                isButtonLink: false,
                iconPosition: "none",
                animation: "none",
                showOnMobile: true,
                showOnTablet: true,
                showOnDesktop: true,
              },
              {
                href: "/terms-of-service",
                label: "Terms of Service",
                isExternal: false,
                target: "_self",
                rel: "noopener",
                ariaLabel: "Terms of Service",
                isButtonLink: false,
                iconPosition: "none",
                animation: "none",
                showOnMobile: true,
                showOnTablet: true,
                showOnDesktop: true,
              },
              {
                href: "/cookies-settings",
                label: "Cookies Settings",
                isExternal: false,
                target: "_self",
                rel: "noopener",
                ariaLabel: "Cookies Settings",
                isButtonLink: false,
                iconPosition: "none",
                animation: "none",
                showOnMobile: true,
                showOnTablet: true,
                showOnDesktop: true,
              },
            ],
          },
        },
      },
    });

    console.log("✅ CloudNow global settings created successfully!");
  } else {
    console.log("ℹ️ Global settings already exist, skipping creation.");
  }

  // Create sample blog data
  await createSampleBlogData(strapi);
};

async function createSampleBlogData(strapi) {
  try {
    // Check existing data
    const existingArticles = await strapi.entityService.findMany("api::article.article");
    const existingTags = await strapi.entityService.findMany("api::tag.tag");
    const existingCategories = await strapi.entityService.findMany("api::category.category");
    const existingAuthors = await strapi.entityService.findMany("api::author.author");
    
    console.log(`📊 Current data: ${existingArticles.length} articles, ${existingTags.length} tags, ${existingCategories.length} categories, ${existingAuthors.length} authors`);
    
    if (existingArticles.length > 0 && existingTags.length > 0) {
      console.log("ℹ️ Blog data already exists, skipping creation.");
      return;
    }

    console.log("🚀 Creating sample blog data...");

    // Create custom roles in Users & Permissions plugin
    const adminRole = await strapi.query('plugin::users-permissions.role').create({
      data: {
        name: "Admin",
        description: "Full access to all features",
        type: "admin_custom",
        permissions: []
      }
    });

    const editorRole = await strapi.query('plugin::users-permissions.role').create({
      data: {
        name: "Editor",
        description: "Can create and edit articles",
        type: "editor_custom",
        permissions: []
      }
    });

    // Create Users using Strapi's built-in user system
    const adminUser = await strapi.query('plugin::users-permissions.user').create({
      data: {
        username: "admin",
        email: "admin@cloudnowservices.com",
        password: "CloudNow2025!",
        confirmed: true,
        blocked: false,
        role: adminRole.id
      }
    });

    const editorUser = await strapi.query('plugin::users-permissions.user').create({
      data: {
        username: "editor",
        email: "editor@cloudnowservices.com",
        password: "Editor2025!",
        confirmed: true,
        blocked: false,
        role: editorRole.id
      }
    });

    // Create Authors linked to Strapi users
    const adminAuthor = await strapi.entityService.create("api::author.author", {
      data: {
        firstName: "Admin",
        lastName: "User",
        slug: "admin-user",
        bio: "System administrator and technical writer for CloudNow.",
        email: "admin@cloudnowservices.com",
        website: "https://cloudnowservices.com",
        socialLinks: {
          linkedin: "https://linkedin.com/in/admin-cloudnow",
          twitter: "https://twitter.com/cloudnow_admin"
        },
        isActive: true,
        joinedAt: new Date(),
        articlesCount: 0,
        user: adminUser.id
      }
    });

    const editorAuthor = await strapi.entityService.create("api::author.author", {
      data: {
        firstName: "Content",
        lastName: "Editor",
        slug: "content-editor",
        bio: "Content manager and technical writer specializing in cloud technologies.",
        email: "editor@cloudnowservices.com",
        website: "https://cloudnowservices.com",
        socialLinks: {
          linkedin: "https://linkedin.com/in/editor-cloudnow"
        },
        isActive: true,
        joinedAt: new Date(),
        articlesCount: 0,
        user: editorUser.id
      }
    });

    // Create Categories
    const cloudCategory = await strapi.entityService.create("api::category.category", {
      data: {
        name: "Cloud Computing",
        slug: "cloud-computing",
        description: "Articles about cloud technologies, services, and best practices",
        color: "#3B82F6",
        isActive: true,
        sortOrder: 1,
        seoTitle: "Cloud Computing Articles",
        seoDescription: "Expert insights on cloud technologies and services"
      }
    });

    const securityCategory = await strapi.entityService.create("api::category.category", {
      data: {
        name: "Security",
        slug: "security",
        description: "Cybersecurity, data protection, and compliance articles",
        color: "#EF4444",
        isActive: true,
        sortOrder: 2,
        seoTitle: "Security Articles",
        seoDescription: "Cybersecurity best practices and compliance guidance"
      }
    });

    const consultingCategory = await strapi.entityService.create("api::category.category", {
      data: {
        name: "IT Consulting",
        slug: "it-consulting",
        description: "IT consulting services and business technology insights",
        color: "#10B981",
        isActive: true,
        sortOrder: 3,
        seoTitle: "IT Consulting Articles",
        seoDescription: "IT consulting services and business technology insights"
      }
    });

    // Create Tags
    const awsTag = await strapi.entityService.create("api::tag.tag", {
      data: {
        name: "AWS",
        slug: "aws",
        description: "Amazon Web Services related content",
        color: "#FF9900",
        isActive: true,
        usageCount: 0
      }
    });

    const azureTag = await strapi.entityService.create("api::tag.tag", {
      data: {
        name: "Azure",
        slug: "azure",
        description: "Microsoft Azure related content",
        color: "#0078D4",
        isActive: true,
        usageCount: 0
      }
    });

    const securityTag = await strapi.entityService.create("api::tag.tag", {
      data: {
        name: "Security",
        slug: "security",
        description: "Security and compliance related content",
        color: "#DC2626",
        isActive: true,
        usageCount: 0
      }
    });

    const migrationTag = await strapi.entityService.create("api::tag.tag", {
      data: {
        name: "Migration",
        slug: "migration",
        description: "Cloud migration strategies and best practices",
        color: "#7C3AED",
        isActive: true,
        usageCount: 0
      }
    });

    // Create Sample Articles
    const article1 = await strapi.entityService.create("api::article.article", {
      data: {
        title: "Getting Started with Cloud Migration: A Complete Guide",
        slug: "getting-started-cloud-migration-complete-guide",
        excerpt: "Learn the essential steps and best practices for migrating your business to the cloud successfully.",
        content: "<h2>Introduction</h2><p>Cloud migration is a critical step in modernizing your IT infrastructure...</p><h2>Planning Your Migration</h2><p>Before starting your cloud migration journey...</p>",
        status: "published",
        publishedAt: new Date(),
        readingTime: 8,
        viewCount: 0,
        isFeatured: true,
        allowComments: true,
        seoTitle: "Cloud Migration Guide: Complete Step-by-Step Tutorial",
        seoDescription: "Learn how to migrate your business to the cloud with our comprehensive guide covering planning, execution, and best practices.",
        seoKeywords: "cloud migration, AWS, Azure, cloud computing, IT consulting",
        author: adminAuthor.id,
        category: cloudCategory.id,
        tags: [awsTag.id, migrationTag.id]
      }
    });

    const article2 = await strapi.entityService.create("api::article.article", {
      data: {
        title: "Cybersecurity Best Practices for Small Businesses",
        slug: "cybersecurity-best-practices-small-businesses",
        excerpt: "Protect your small business from cyber threats with these essential security practices.",
        content: "<h2>Why Cybersecurity Matters</h2><p>Small businesses are increasingly targeted by cybercriminals...</p><h2>Essential Security Measures</h2><p>Implement these key security practices...</p>",
        status: "published",
        publishedAt: new Date(),
        readingTime: 6,
        viewCount: 0,
        isFeatured: false,
        allowComments: true,
        seoTitle: "Small Business Cybersecurity: Essential Protection Guide",
        seoDescription: "Protect your small business from cyber threats with our comprehensive cybersecurity guide and best practices.",
        seoKeywords: "cybersecurity, small business, security, data protection",
        author: editorAuthor.id,
        category: securityCategory.id,
        tags: [securityTag.id]
      }
    });

    const article3 = await strapi.entityService.create("api::article.article", {
      data: {
        title: "AWS vs Azure: Choosing the Right Cloud Platform",
        slug: "aws-vs-azure-choosing-right-cloud-platform",
        excerpt: "Compare AWS and Azure to make an informed decision for your cloud infrastructure needs.",
        content: "<h2>Platform Comparison</h2><p>Both AWS and Azure offer comprehensive cloud services...</p><h2>Making Your Choice</h2><p>Consider these factors when choosing...</p>",
        status: "published",
        publishedAt: new Date(),
        readingTime: 10,
        viewCount: 0,
        isFeatured: true,
        allowComments: true,
        seoTitle: "AWS vs Azure: Complete Cloud Platform Comparison Guide",
        seoDescription: "Compare AWS and Azure cloud platforms to choose the best solution for your business needs and requirements.",
        seoKeywords: "AWS, Azure, cloud comparison, cloud platform, cloud services",
        author: adminAuthor.id,
        category: cloudCategory.id,
        tags: [awsTag.id, azureTag.id]
      }
    });

    // Update author article counts
    await strapi.entityService.update("api::author.author", adminAuthor.id, {
      data: { articlesCount: 2 }
    });

    await strapi.entityService.update("api::author.author", editorAuthor.id, {
      data: { articlesCount: 1 }
    });

    // Update tag usage counts
    await strapi.entityService.update("api::tag.tag", awsTag.id, {
      data: { usageCount: 2 }
    });

    await strapi.entityService.update("api::tag.tag", migrationTag.id, {
      data: { usageCount: 1 }
    });

    await strapi.entityService.update("api::tag.tag", securityTag.id, {
      data: { usageCount: 1 }
    });

    await strapi.entityService.update("api::tag.tag", azureTag.id, {
      data: { usageCount: 1 }
    });

    console.log("✅ Sample blog data created successfully!");
    console.log(`📝 Created ${3} articles, ${3} categories, ${4} tags, ${2} authors, ${2} users, ${2} custom roles`);

  } catch (error) {
    console.log("⚠️ Error creating sample blog data:", error.message);
    console.log("📋 Error details:", error);
  }
}
