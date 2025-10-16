export default async ({ strapi }) => {
  console.log("🚀 CloudNow Strapi Bootstrap Starting...");
  
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

  // Create sample blog data - Now that relationships are fixed
  await createSampleBlogData(strapi);
};

async function createSampleBlogData(strapi) {
  try {
    console.log("🚀 Creating sample blog data...");

    // Check if data already exists
    const existingTags = await strapi.entityService.findMany("api::tag.tag");
    const existingArticles = await strapi.entityService.findMany("api::article.article");
    const existingAuthors = await strapi.entityService.findMany("api::author.author");
    
    console.log(`📊 Current data: ${existingTags.length} tags, ${existingArticles.length} articles, ${existingAuthors.length} authors`);
    
    if (existingTags.length > 0 && existingArticles.length > 0 && existingAuthors.length > 0) {
      console.log("ℹ️ Blog data already exists, skipping creation.");
      return;
    }

    // Create Categories first (they should already exist from bootstrap)
    const existingCategories = await strapi.entityService.findMany("api::category.category");
    const cloudCategory = existingCategories.find(cat => cat.slug === "cloud-computing");
    const securityCategory = existingCategories.find(cat => cat.slug === "security");
    const consultingCategory = existingCategories.find(cat => cat.slug === "it-consulting");

    console.log(`📂 Found ${existingCategories.length} existing categories`);

    // Create Tags
    if (existingTags.length === 0) {
      console.log("🏷️ Creating tags...");
      
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

      const devopsTag = await strapi.entityService.create("api::tag.tag", {
        data: {
          name: "DevOps",
          slug: "devops",
          description: "DevOps practices and tools",
          color: "#059669",
          isActive: true,
          usageCount: 0
        }
      });

      const cloudTag = await strapi.entityService.create("api::tag.tag", {
        data: {
          name: "Cloud Computing",
          slug: "cloud-computing",
          description: "General cloud computing topics",
          color: "#3B82F6",
          isActive: true,
          usageCount: 0
        }
      });

      console.log("✅ Tags created successfully!");
    }

    // Create Authors
    if (existingAuthors.length === 0) {
      console.log("👥 Creating authors...");
      
      const johnAuthor = await strapi.entityService.create("api::author.author", {
        data: {
          firstName: "John",
          lastName: "Smith",
          slug: "john-smith",
          bio: "John is a senior cloud architect with over 10 years of experience in AWS and Azure platforms. He specializes in cloud migration strategies and DevOps practices.",
          email: "john.smith@cloudnowservices.com",
          website: "https://johnsmith.dev",
          socialLinks: {
            linkedin: "https://linkedin.com/in/johnsmith",
            twitter: "https://twitter.com/johnsmith",
            github: "https://github.com/johnsmith"
          },
          isActive: true,
          joinedAt: "2024-01-15T00:00:00.000Z",
          articlesCount: 0
        }
      });

      const sarahAuthor = await strapi.entityService.create("api::author.author", {
        data: {
          firstName: "Sarah",
          lastName: "Johnson",
          slug: "sarah-johnson",
          bio: "Sarah is a cybersecurity expert with extensive experience in protecting small and medium businesses from cyber threats. She holds multiple security certifications.",
          email: "sarah.johnson@cloudnowservices.com",
          website: "https://sarahjohnson.security",
          socialLinks: {
            linkedin: "https://linkedin.com/in/sarahjohnson",
            twitter: "https://twitter.com/sarahjohnson"
          },
          isActive: true,
          joinedAt: "2024-02-01T00:00:00.000Z",
          articlesCount: 0
        }
      });

      const mikeAuthor = await strapi.entityService.create("api::author.author", {
        data: {
          firstName: "Mike",
          lastName: "Chen",
          slug: "mike-chen",
          bio: "Mike is a DevOps engineer specializing in automation, CI/CD pipelines, and cloud infrastructure management. He has helped numerous companies streamline their development processes.",
          email: "mike.chen@cloudnowservices.com",
          website: "https://mikechen.dev",
          socialLinks: {
            linkedin: "https://linkedin.com/in/mikechen",
            github: "https://github.com/mikechen"
          },
          isActive: true,
          joinedAt: "2024-03-10T00:00:00.000Z",
          articlesCount: 0
        }
      });

      console.log("✅ Authors created successfully!");
    }

    // Create Articles
    if (existingArticles.length === 0) {
      console.log("📝 Creating articles...");
      
      // Get created tags and authors
      const tags = await strapi.entityService.findMany("api::tag.tag");
      const authors = await strapi.entityService.findMany("api::author.author");
      
      const awsTag = tags.find(tag => tag.slug === "aws");
      const azureTag = tags.find(tag => tag.slug === "azure");
      const securityTag = tags.find(tag => tag.slug === "security");
      const migrationTag = tags.find(tag => tag.slug === "migration");
      const devopsTag = tags.find(tag => tag.slug === "devops");
      const cloudTag = tags.find(tag => tag.slug === "cloud-computing");
      
      const johnAuthor = authors.find(author => author.slug === "john-smith");
      const sarahAuthor = authors.find(author => author.slug === "sarah-johnson");
      const mikeAuthor = authors.find(author => author.slug === "mike-chen");

      // Article 1: Cloud Migration Guide
      await strapi.entityService.create("api::article.article", {
        data: {
          title: "Getting Started with Cloud Migration: A Complete Guide",
          slug: "getting-started-cloud-migration-complete-guide",
          excerpt: "Learn the essential steps and best practices for migrating your business to the cloud successfully.",
          content: "<h2>Introduction</h2><p>Cloud migration is a critical step in modernizing your IT infrastructure. In this comprehensive guide, we'll walk you through everything you need to know to successfully migrate your business to the cloud.</p><h2>Planning Your Migration</h2><p>Before starting your cloud migration journey, it's crucial to have a solid plan in place. This includes assessing your current infrastructure, identifying workloads suitable for migration, and choosing the right cloud provider.</p><h2>Key Considerations</h2><ul><li>Cost optimization</li><li>Security and compliance</li><li>Performance requirements</li><li>Disaster recovery</li></ul><h2>Conclusion</h2><p>Cloud migration can be complex, but with proper planning and execution, it can transform your business operations and provide significant benefits.</p>",
          status: "published",
          publishedAt: "2025-01-16T00:00:00.000Z",
          readingTime: 8,
          viewCount: 0,
          isFeatured: true,
          allowComments: true,
          seoTitle: "Cloud Migration Guide: Complete Step-by-Step Tutorial",
          seoDescription: "Learn how to migrate your business to the cloud with our comprehensive guide covering planning, execution, and best practices.",
          seoKeywords: "cloud migration, AWS, Azure, cloud computing, IT consulting",
          author: johnAuthor.id,
          category: cloudCategory.id,
          tags: [awsTag.id, migrationTag.id]
        }
      });

      // Article 2: Cybersecurity Guide
      await strapi.entityService.create("api::article.article", {
        data: {
          title: "Cybersecurity Best Practices for Small Businesses",
          slug: "cybersecurity-best-practices-small-businesses",
          excerpt: "Protect your small business from cyber threats with these essential security practices.",
          content: "<h2>Why Cybersecurity Matters</h2><p>Small businesses are increasingly targeted by cybercriminals because they often have weaker security measures than large enterprises. Implementing proper cybersecurity practices is essential for protecting your business and customer data.</p><h2>Essential Security Measures</h2><p>Implement these key security practices to protect your business:</p><ul><li>Use strong passwords and multi-factor authentication</li><li>Keep software and systems updated</li><li>Implement regular data backups</li><li>Train employees on security awareness</li><li>Use firewalls and antivirus software</li></ul><h2>Creating a Security Culture</h2><p>Building a security-conscious culture within your organization is crucial for long-term protection against cyber threats.</p>",
          status: "published",
          publishedAt: "2025-01-15T00:00:00.000Z",
          readingTime: 6,
          viewCount: 0,
          isFeatured: false,
          allowComments: true,
          seoTitle: "Small Business Cybersecurity: Essential Protection Guide",
          seoDescription: "Protect your small business from cyber threats with our comprehensive cybersecurity guide and best practices.",
          seoKeywords: "cybersecurity, small business, security, data protection",
          author: sarahAuthor.id,
          category: securityCategory.id,
          tags: [securityTag.id]
        }
      });

      // Article 3: AWS vs Azure
      await strapi.entityService.create("api::article.article", {
        data: {
          title: "AWS vs Azure: Choosing the Right Cloud Platform",
          slug: "aws-vs-azure-choosing-right-cloud-platform",
          excerpt: "Compare AWS and Azure to make an informed decision for your cloud infrastructure needs.",
          content: "<h2>Platform Comparison</h2><p>Both AWS and Azure offer comprehensive cloud services, but they have different strengths and pricing models. Understanding these differences is crucial for making the right choice for your business.</p><h2>Service Offerings</h2><p>AWS provides a vast array of services with deep functionality, while Azure offers strong integration with Microsoft products and enterprise features.</p><h2>Pricing Models</h2><p>Both platforms offer pay-as-you-go pricing, but Azure often provides better pricing for Windows-based workloads, while AWS may be more cost-effective for Linux environments.</p><h2>Making Your Choice</h2><p>Consider these factors when choosing between AWS and Azure:</p><ul><li>Your existing technology stack</li><li>Budget constraints</li><li>Compliance requirements</li><li>Team expertise</li><li>Geographic presence</li></ul>",
          status: "published",
          publishedAt: "2025-01-14T00:00:00.000Z",
          readingTime: 10,
          viewCount: 0,
          isFeatured: true,
          allowComments: true,
          seoTitle: "AWS vs Azure: Complete Cloud Platform Comparison Guide",
          seoDescription: "Compare AWS and Azure cloud platforms to choose the best solution for your business needs and requirements.",
          seoKeywords: "AWS, Azure, cloud comparison, cloud platform, cloud services",
          author: johnAuthor.id,
          category: cloudCategory.id,
          tags: [awsTag.id, azureTag.id]
        }
      });

      // Article 4: DevOps Guide
      await strapi.entityService.create("api::article.article", {
        data: {
          title: "DevOps Best Practices for Cloud Infrastructure",
          slug: "devops-best-practices-cloud-infrastructure",
          excerpt: "Learn essential DevOps practices for managing cloud infrastructure effectively.",
          content: "<h2>What is DevOps?</h2><p>DevOps is a set of practices that combines software development and IT operations to shorten the development lifecycle and provide continuous delivery of high-quality software.</p><h2>Key DevOps Practices</h2><ul><li>Continuous Integration and Continuous Deployment (CI/CD)</li><li>Infrastructure as Code (IaC)</li><li>Monitoring and logging</li><li>Automated testing</li><li>Version control</li></ul><h2>Cloud-Native DevOps</h2><p>When working with cloud infrastructure, DevOps practices become even more important for managing scalability, reliability, and cost optimization.</p><h2>Implementation Strategy</h2><p>Start with small, incremental changes and gradually build your DevOps capabilities. Focus on automation and collaboration between development and operations teams.</p>",
          status: "published",
          publishedAt: "2025-01-13T00:00:00.000Z",
          readingTime: 7,
          viewCount: 0,
          isFeatured: false,
          allowComments: true,
          seoTitle: "DevOps Best Practices: Cloud Infrastructure Management",
          seoDescription: "Learn essential DevOps practices for managing cloud infrastructure effectively and efficiently.",
          seoKeywords: "DevOps, cloud infrastructure, CI/CD, automation, cloud management",
          author: mikeAuthor.id,
          category: consultingCategory.id,
          tags: [devopsTag.id, cloudTag.id]
        }
      });

      // Article 5: Cost Optimization
      await strapi.entityService.create("api::article.article", {
        data: {
          title: "Cost Optimization Strategies for Cloud Computing",
          slug: "cost-optimization-strategies-cloud-computing",
          excerpt: "Discover effective strategies to optimize your cloud computing costs without sacrificing performance.",
          content: "<h2>Understanding Cloud Costs</h2><p>Cloud computing costs can quickly spiral out of control if not managed properly. Understanding the different cost components is the first step toward optimization.</p><h2>Cost Optimization Strategies</h2><ul><li>Right-sizing your instances</li><li>Using reserved instances</li><li>Implementing auto-scaling</li><li>Monitoring and alerting</li><li>Regular cost reviews</li></ul><h2>Tools and Services</h2><p>Leverage cloud provider tools and third-party services to monitor and optimize your cloud spending effectively.</p><h2>Best Practices</h2><p>Establish cost governance policies, implement tagging strategies, and regularly review your cloud usage to ensure optimal cost management.</p>",
          status: "published",
          publishedAt: "2025-01-12T00:00:00.000Z",
          readingTime: 9,
          viewCount: 0,
          isFeatured: false,
          allowComments: true,
          seoTitle: "Cloud Cost Optimization: Strategies to Reduce Spending",
          seoDescription: "Learn effective strategies to optimize your cloud computing costs and maximize your return on investment.",
          seoKeywords: "cloud costs, cost optimization, cloud management, AWS costs, Azure costs",
          author: johnAuthor.id,
          category: cloudCategory.id,
          tags: [cloudTag.id]
        }
      });

      console.log("✅ Articles created successfully!");
    }

    console.log("🎉 Sample blog data creation completed!");
    console.log("📊 Final data: 6 tags, 3 authors, 5 articles");

  } catch (error) {
    console.log("⚠️ Error creating sample blog data:", error.message);
    console.log("📋 Error details:", error);
  }
}
