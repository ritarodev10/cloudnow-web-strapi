// Script to manually create missing blog data
// Run this in Strapi's admin panel console or as a separate script

export default async ({ strapi }) => {
  console.log("🔧 Manually creating missing blog data...");

  try {
    // Check existing data
    const existingTags = await strapi.entityService.findMany("api::tag.tag");
    const existingArticles = await strapi.entityService.findMany("api::article.article");
    const existingCategories = await strapi.entityService.findMany("api::category.category");
    const existingAuthors = await strapi.entityService.findMany("api::author.author");

    console.log(`📊 Current data: ${existingTags.length} tags, ${existingArticles.length} articles, ${existingCategories.length} categories, ${existingAuthors.length} authors`);

    // Create missing tags if they don't exist
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

      console.log("✅ Tags created successfully!");
    }

    // Create missing articles if they don't exist
    if (existingArticles.length === 0) {
      console.log("📝 Creating articles...");
      
      // Get the first category and author for creating articles
      const categories = await strapi.entityService.findMany("api::category.category");
      const authors = await strapi.entityService.findMany("api::author.author");
      const tags = await strapi.entityService.findMany("api::tag.tag");

      if (categories.length > 0 && authors.length > 0 && tags.length > 0) {
        const cloudCategory = categories.find(cat => cat.slug === "cloud-computing") || categories[0];
        const securityCategory = categories.find(cat => cat.slug === "security") || categories[0];
        const adminAuthor = authors.find(author => author.slug === "admin-user") || authors[0];
        const editorAuthor = authors.find(author => author.slug === "content-editor") || authors[0];
        
        const awsTag = tags.find(tag => tag.slug === "aws");
        const azureTag = tags.find(tag => tag.slug === "azure");
        const securityTag = tags.find(tag => tag.slug === "security");
        const migrationTag = tags.find(tag => tag.slug === "migration");

        // Create articles
        await strapi.entityService.create("api::article.article", {
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
            tags: awsTag && migrationTag ? [awsTag.id, migrationTag.id] : []
          }
        });

        await strapi.entityService.create("api::article.article", {
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
            tags: securityTag ? [securityTag.id] : []
          }
        });

        await strapi.entityService.create("api::article.article", {
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
            tags: awsTag && azureTag ? [awsTag.id, azureTag.id] : []
          }
        });

        console.log("✅ Articles created successfully!");
      } else {
        console.log("⚠️ Missing dependencies for articles creation");
      }
    }

    console.log("🎉 Missing data creation completed!");

  } catch (error) {
    console.log("❌ Error creating missing data:", error.message);
    console.log("📋 Error details:", error);
  }
};
