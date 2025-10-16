# CloudNow Strapi API Documentation

A comprehensive headless CMS for CloudNow's website and blog system, built with Strapi v5.

## 🚀 Quick Start

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run develop

# Access admin panel
http://localhost:1337/admin
```

### Production
- **Admin Panel**: https://meaningful-action-d510b21940.strapiapp.com/admin
- **API Base URL**: https://meaningful-action-d510b21940.strapiapp.com/api

## 📚 API Endpoints

### Global Settings
Manage site-wide configuration including header and footer.

#### Get Global Settings
```http
GET /api/global-settings
```

**Response:**
```json
{
  "data": {
    "id": 1,
    "attributes": {
      "siteName": "CloudNow",
      "siteDescription": "Specialized IT consulting and cloud services...",
      "siteUrl": "https://cloudnowservices.com",
      "header": {
        "logo": {
          "companyName": "CLOUD NOW",
          "href": "/",
          "showText": true,
          "showIcon": true
        },
        "navigation": [
          {
            "label": "Home",
            "href": "/",
            "hasDropdown": false
          },
          {
            "label": "Services",
            "href": "/services",
            "hasDropdown": true,
            "dropdownItems": [
              {
                "label": "Cloud Consulting",
                "href": "/services/cloud-consulting"
              }
            ]
          }
        ],
        "ctaButton": {
          "label": "Get in touch",
          "href": "/contact",
          "type": "primary",
          "size": "medium"
        }
      },
      "footer": {
        "companyInfo": {
          "description": "Specialized IT consulting...",
          "copyright": "© 2025 CloudNow. All rights reserved."
        },
        "offices": {
          "title": "Our Offices",
          "offices": [
            {
              "country": "USA",
              "address": "30 N Gould St Ste N Sheridan, WY 82801"
            }
          ]
        }
      }
    }
  }
}
```

---

## 📝 Blog API

### Articles
Manage blog articles with full content, SEO, and relationships.

#### Get All Articles
```http
GET /api/articles
```

**Query Parameters:**
- `populate=*` - Include all relationships
- `filters[status][$eq]=published` - Filter by status
- `filters[isFeatured][$eq]=true` - Get featured articles
- `filters[category][slug][$eq]=cloud-computing` - Filter by category
- `filters[tags][slug][$in]=aws,azure` - Filter by tags
- `sort=publishedAt:desc` - Sort by publication date
- `pagination[page]=1&pagination[pageSize]=10` - Pagination

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "Getting Started with Cloud Migration: A Complete Guide",
        "slug": "getting-started-cloud-migration-complete-guide",
        "excerpt": "Learn the essential steps and best practices...",
        "content": "<h2>Introduction</h2><p>Cloud migration is...</p>",
        "status": "published",
        "publishedAt": "2025-01-16T07:00:00.000Z",
        "readingTime": 8,
        "viewCount": 0,
        "isFeatured": true,
        "allowComments": true,
        "seoTitle": "Cloud Migration Guide: Complete Step-by-Step Tutorial",
        "seoDescription": "Learn how to migrate your business to the cloud...",
        "seoKeywords": "cloud migration, AWS, Azure, cloud computing",
        "author": {
          "data": {
            "id": 1,
            "attributes": {
              "firstName": "Admin",
              "lastName": "User",
              "slug": "admin-user",
              "bio": "System administrator and technical writer...",
              "email": "admin@cloudnowservices.com",
              "avatar": {
                "data": null
              }
            }
          }
        },
        "category": {
          "data": {
            "id": 1,
            "attributes": {
              "name": "Cloud Computing",
              "slug": "cloud-computing",
              "description": "Articles about cloud technologies...",
              "color": "#3B82F6"
            }
          }
        },
        "tags": {
          "data": [
            {
              "id": 1,
              "attributes": {
                "name": "AWS",
                "slug": "aws",
                "color": "#FF9900"
              }
            }
          ]
        },
        "featuredImage": {
          "data": null
        },
        "gallery": {
          "data": []
        }
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 3
    }
  }
}
```

#### Get Single Article
```http
GET /api/articles/:id
```

#### Get Article by Slug
```http
GET /api/articles?filters[slug][$eq]=getting-started-cloud-migration-complete-guide
```

---

### Categories
Organize articles by topics and themes.

#### Get All Categories
```http
GET /api/categories
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "name": "Cloud Computing",
        "slug": "cloud-computing",
        "description": "Articles about cloud technologies, services, and best practices",
        "color": "#3B82F6",
        "isActive": true,
        "sortOrder": 1,
        "seoTitle": "Cloud Computing Articles",
        "seoDescription": "Expert insights on cloud technologies and services",
        "articles": {
          "data": [
            {
              "id": 1,
              "attributes": {
                "title": "Getting Started with Cloud Migration: A Complete Guide",
                "slug": "getting-started-cloud-migration-complete-guide"
              }
            }
          ]
        }
      }
    }
  ]
}
```

#### Get Single Category
```http
GET /api/categories/:id
```

---

### Tags
Label and filter content with flexible tagging system.

#### Get All Tags
```http
GET /api/tags
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "name": "AWS",
        "slug": "aws",
        "description": "Amazon Web Services related content",
        "color": "#FF9900",
        "isActive": true,
        "usageCount": 2,
        "articles": {
          "data": [
            {
              "id": 1,
              "attributes": {
                "title": "Getting Started with Cloud Migration: A Complete Guide"
              }
            }
          ]
        }
      }
    }
  ]
}
```

#### Get Single Tag
```http
GET /api/tags/:id
```

---

### Authors
Manage content creators and their profiles.

#### Get All Authors
```http
GET /api/authors
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "firstName": "Admin",
        "lastName": "User",
        "slug": "admin-user",
        "bio": "System administrator and technical writer for CloudNow.",
        "email": "admin@cloudnowservices.com",
        "website": "https://cloudnowservices.com",
        "socialLinks": {
          "linkedin": "https://linkedin.com/in/admin-cloudnow",
          "twitter": "https://twitter.com/cloudnow_admin"
        },
        "isActive": true,
        "joinedAt": "2025-01-16T07:00:00.000Z",
        "articlesCount": 2,
        "avatar": {
          "data": null
        },
        "userStaff": {
          "data": {
            "id": 1,
            "attributes": {
              "username": "admin",
              "firstName": "Admin",
              "lastName": "User",
              "department": "IT",
              "position": "System Administrator"
            }
          }
        },
        "articles": {
          "data": [
            {
              "id": 1,
              "attributes": {
                "title": "Getting Started with Cloud Migration: A Complete Guide"
              }
            }
          ]
        }
      }
    }
  ]
}
```

#### Get Single Author
```http
GET /api/authors/:id
```

---

## 👥 User Management API

### User Staff
Manage staff members and their roles.

#### Get All User Staff
```http
GET /api/user-staffs
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "username": "admin",
        "email": "admin@cloudnowservices.com",
        "firstName": "Admin",
        "lastName": "User",
        "department": "IT",
        "position": "System Administrator",
        "isActive": true,
        "joinedAt": "2025-01-16T07:00:00.000Z",
        "lastLoginAt": null,
        "avatar": {
          "data": null
        },
        "userRole": {
          "data": {
            "id": 1,
            "attributes": {
              "name": "Admin",
              "slug": "admin",
              "description": "Full access to all features"
            }
          }
        },
        "author": {
          "data": {
            "id": 1,
            "attributes": {
              "firstName": "Admin",
              "lastName": "User",
              "slug": "admin-user"
            }
          }
        }
      }
    }
  ]
}
```

### User Roles
Manage permissions and access levels.

#### Get All User Roles
```http
GET /api/user-roles
```

**Response:**
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "name": "Admin",
        "slug": "admin",
        "description": "Full access to all features",
        "permissions": {
          "articles": { "create": true, "read": true, "update": true, "delete": true },
          "categories": { "create": true, "read": true, "update": true, "delete": true },
          "tags": { "create": true, "read": true, "update": true, "delete": true },
          "authors": { "create": true, "read": true, "update": true, "delete": true }
        },
        "isActive": true,
        "isDefault": true,
        "sortOrder": 1,
        "userStaffs": {
          "data": [
            {
              "id": 1,
              "attributes": {
                "username": "admin",
                "firstName": "Admin",
                "lastName": "User"
              }
            }
          ]
        }
      }
    }
  ]
}
```

---

## 🔍 Advanced Queries

### Filter Articles by Multiple Criteria
```http
GET /api/articles?filters[status][$eq]=published&filters[isFeatured][$eq]=true&filters[category][slug][$eq]=cloud-computing&sort=publishedAt:desc&pagination[pageSize]=5
```

### Search Articles by Title
```http
GET /api/articles?filters[title][$containsi]=cloud
```

### Get Articles by Author
```http
GET /api/articles?filters[author][slug][$eq]=admin-user&populate=*
```

### Get Related Articles
```http
GET /api/articles?filters[tags][slug][$in]=aws,azure&populate[relatedArticles]=true
```

### Get Category with Article Count
```http
GET /api/categories?populate[articles][fields][0]=title&populate[articles][fields][1]=slug
```

---

## 📊 Sample Data

The system comes pre-populated with sample data:

### Articles (3)
1. **Getting Started with Cloud Migration: A Complete Guide**
   - Category: Cloud Computing
   - Tags: AWS, Migration
   - Author: Admin User

2. **Cybersecurity Best Practices for Small Businesses**
   - Category: Security
   - Tags: Security
   - Author: Content Editor

3. **AWS vs Azure: Choosing the Right Cloud Platform**
   - Category: Cloud Computing
   - Tags: AWS, Azure
   - Author: Admin User

### Categories (3)
- Cloud Computing (#3B82F6)
- Security (#EF4444)
- IT Consulting (#10B981)

### Tags (4)
- AWS (#FF9900)
- Azure (#0078D4)
- Security (#DC2626)
- Migration (#7C3AED)

### Authors (2)
- Admin User (System Administrator)
- Content Editor (Content Manager)

### User Roles (2)
- Admin (Full access)
- Editor (Limited access)

---

## 🔐 Authentication & Permissions

### Public Access
All read operations (`GET`) are publicly accessible:
- Articles, Categories, Tags, Authors
- Global Settings

### Admin Access
Write operations require authentication:
- Create, Update, Delete operations
- User management
- Content management

### Role-Based Permissions
- **Admin**: Full CRUD access to all content
- **Editor**: Create/Update articles and tags, read-only for categories and authors

---

## 🛠️ Development

### Bootstrap Data
The system automatically creates sample data on first startup via `src/bootstrap.ts`:
- Global settings with CloudNow branding
- Sample blog articles and metadata
- User roles and staff accounts
- API permissions configuration

### Content Types Structure
```
src/api/
├── article/          # Blog articles
├── author/           # Article authors
├── category/         # Article categories
├── tag/              # Content tags
├── user-staff/       # Staff management
├── user-role/        # Role management
└── global-setting/   # Site configuration
```

### Components Structure
```
src/components/
├── shared/           # Reusable components
│   ├── link.json
│   └── logo-link.json
├── layout/           # Layout components
│   ├── header.json
│   └── footer.json
├── company/          # Company-specific components
├── navigation/       # Navigation components
├── forms/            # Form components
└── content/          # Content components
```

---

## 🚀 Deployment

### Environment Variables
```bash
# Database
DATABASE_CLIENT=sqlite
DATABASE_FILENAME=.tmp/data.db

# Admin Panel
ADMIN_PATH=/admin

# API
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
```

### Production Checklist
- [ ] Configure database connection
- [ ] Set secure JWT secrets
- [ ] Configure CORS settings
- [ ] Set up file upload limits
- [ ] Configure email settings
- [ ] Set up backup strategy

---

## 📞 Support

For technical support or questions about the CloudNow API:
- **Email**: contact@cloudnowservices.com
- **Website**: https://cloudnowservices.com
- **Documentation**: This README file

---

## 📄 License

This project is proprietary software owned by CloudNow Inc. All rights reserved.

---

*Last updated: January 16, 2025*