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

## 🔐 Authentication API

Strapi provides built-in JWT-based authentication for user management and dashboard access.

### Login

Authenticate users and receive JWT token.

```http
POST /api/auth/local
```

**Request Body:**

```json
{
  "identifier": "admin@cloudnowservices.com",
  "password": "your-password"
}
```

**Response:**

```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "admin",
    "email": "admin@cloudnowservices.com",
    "confirmed": true,
    "blocked": false,
    "role": {
      "id": 1,
      "name": "Admin",
      "type": "admin_custom"
    }
  }
}
```

### Register

Create new user accounts.

```http
POST /api/auth/local/register
```

**Request Body:**

```json
{
  "username": "newuser",
  "email": "user@cloudnowservices.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 2,
    "username": "newuser",
    "email": "user@cloudnowservices.com",
    "confirmed": true,
    "blocked": false,
    "role": {
      "id": 3,
      "name": "Authenticated",
      "type": "authenticated"
    }
  }
}
```

### Forgot Password

Request password reset email.

```http
POST /api/auth/forgot-password
```

**Request Body:**

```json
{
  "email": "admin@cloudnowservices.com"
}
```

**Response:**

```json
{
  "ok": true
}
```

### Reset Password

Reset password using reset code.

```http
POST /api/auth/reset-password
```

**Request Body:**

```json
{
  "code": "reset-code-from-email",
  "password": "newpassword123",
  "passwordConfirmation": "newpassword123"
}
```

**Response:**

```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "admin",
    "email": "admin@cloudnowservices.com"
  }
}
```

### Authenticated Requests

Use JWT token in Authorization header for protected endpoints.

```http
GET /api/articles
Authorization: Bearer YOUR_JWT_TOKEN
```

### JavaScript Example

```javascript
// Login function
const login = async (email, password) => {
  const response = await fetch('http://localhost:1337/api/auth/local', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier: email,
      password: password
    })
  });
  
  const data = await response.json();
  
  if (data.jwt) {
    localStorage.setItem('jwt', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));
    return data;
  }
  
  throw new Error(data.message);
};

// Authenticated request
const getArticles = async () => {
  const token = localStorage.getItem('jwt');
  
  const response = await fetch('http://localhost:1337/api/articles', {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
  return response.json();
};
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

### Users (Built-in Strapi)

Manage users using Strapi's built-in Users & Permissions plugin.

#### Get All Users

```http
GET /api/users
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
        "confirmed": true,
        "blocked": false,
        "createdAt": "2025-01-16T07:00:00.000Z",
        "updatedAt": "2025-01-16T07:00:00.000Z",
        "role": {
          "data": {
            "id": 1,
            "attributes": {
              "name": "Admin",
              "description": "Full access to all features",
              "type": "admin_custom"
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

### Roles (Built-in Strapi)

Manage user roles using Strapi's built-in Users & Permissions plugin.

#### Get All Roles

```http
GET /api/users-permissions/roles
```

**Response:**

```json
{
  "roles": [
    {
      "id": 1,
      "name": "Admin",
      "description": "Full access to all features",
      "type": "admin_custom",
      "permissions": []
    },
    {
      "id": 2,
      "name": "Editor",
      "description": "Can create and edit articles",
      "type": "editor_custom",
      "permissions": []
    },
    {
      "id": 3,
      "name": "Authenticated",
      "description": "Default role given to authenticated user.",
      "type": "authenticated",
      "permissions": []
    },
    {
      "id": 4,
      "name": "Public",
      "description": "Default role given to unauthenticated user.",
      "type": "public",
      "permissions": []
    }
  ]
}
```

---

## 🧪 API Testing Guide

### Quick Test Commands

#### Test Authentication

```bash
# Login
curl -X POST http://localhost:1337/api/auth/local \
  -H "Content-Type: application/json" \
  -d '{
    "identifier": "admin@cloudnowservices.com",
    "password": "your-password"
  }'

# Register new user
curl -X POST http://localhost:1337/api/auth/local/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "testuser",
    "email": "test@cloudnowservices.com",
    "password": "password123"
  }'
```

#### Test Public Endpoints

```bash
# Get all articles
curl http://localhost:1337/api/articles?populate=*

# Get all tags
curl http://localhost:1337/api/tags

# Get all categories
curl http://localhost:1337/api/categories

# Get all authors
curl http://localhost:1337/api/authors?populate=*

# Get global settings
curl http://localhost:1337/api/global-settings
```

#### Test Authenticated Endpoints

```bash
# First, get JWT token from login
JWT_TOKEN="your-jwt-token-here"

# Get articles with authentication
curl -H "Authorization: Bearer $JWT_TOKEN" \
  http://localhost:1337/api/articles

# Create new article (requires authentication)
curl -X POST http://localhost:1337/api/articles \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $JWT_TOKEN" \
  -d '{
    "data": {
      "title": "Test Article",
      "slug": "test-article",
      "excerpt": "This is a test article",
      "content": "<p>This is test content</p>",
      "status": "published",
      "publishedAt": "2025-01-16T00:00:00.000Z",
      "readingTime": 5,
      "isFeatured": false,
      "allowComments": true
    }
  }'
```

#### Test Filtering and Search

```bash
# Get featured articles
curl "http://localhost:1337/api/articles?filters[isFeatured][\$eq]=true&populate=*"

# Get articles by category
curl "http://localhost:1337/api/articles?filters[category][slug][\$eq]=cloud-computing&populate=*"

# Get articles by tag
curl "http://localhost:1337/api/articles?filters[tags][slug][\$eq]=aws&populate=*"

# Search articles by title
curl "http://localhost:1337/api/articles?filters[title][\$containsi]=cloud&populate=*"

# Get articles by author
curl "http://localhost:1337/api/articles?filters[author][slug][\$eq]=john-smith&populate=*"

# Sort articles by date
curl "http://localhost:1337/api/articles?sort=publishedAt:desc&populate=*"

# Pagination
curl "http://localhost:1337/api/articles?pagination[page]=1&pagination[pageSize]=3&populate=*"
```

#### Test User Management

```bash
# Get all users (requires admin authentication)
curl -H "Authorization: Bearer $JWT_TOKEN" \
  http://localhost:1337/api/users

# Get user roles
curl -H "Authorization: Bearer $JWT_TOKEN" \
  http://localhost:1337/api/users-permissions/roles

# Get current user info
curl -H "Authorization: Bearer $JWT_TOKEN" \
  http://localhost:1337/api/users/me
```

### Browser Testing

#### Direct Browser Access

```
# Public endpoints (no authentication required)
http://localhost:1337/api/articles?populate=*
http://localhost:1337/api/tags
http://localhost:1337/api/categories
http://localhost:1337/api/authors?populate=*
http://localhost:1337/api/global-settings

# Admin panel
http://localhost:1337/admin
```

### Postman Collection

Import these endpoints into Postman for easier testing:

#### Environment Variables

```
BASE_URL: http://localhost:1337
API_URL: {{BASE_URL}}/api
JWT_TOKEN: (set after login)
```

#### Collection Endpoints

1. **Authentication**
   - `POST {{API_URL}}/auth/local` - Login
   - `POST {{API_URL}}/auth/local/register` - Register
   - `POST {{API_URL}}/auth/forgot-password` - Forgot Password
   - `POST {{API_URL}}/auth/reset-password` - Reset Password

2. **Articles**
   - `GET {{API_URL}}/articles` - Get All Articles
   - `GET {{API_URL}}/articles/{{id}}` - Get Single Article
   - `POST {{API_URL}}/articles` - Create Article (Auth Required)
   - `PUT {{API_URL}}/articles/{{id}}` - Update Article (Auth Required)
   - `DELETE {{API_URL}}/articles/{{id}}` - Delete Article (Auth Required)

3. **Tags**
   - `GET {{API_URL}}/tags` - Get All Tags
   - `GET {{API_URL}}/tags/{{id}}` - Get Single Tag
   - `POST {{API_URL}}/tags` - Create Tag (Auth Required)

4. **Categories**
   - `GET {{API_URL}}/categories` - Get All Categories
   - `GET {{API_URL}}/categories/{{id}}` - Get Single Category
   - `POST {{API_URL}}/categories` - Create Category (Auth Required)

5. **Authors**
   - `GET {{API_URL}}/authors` - Get All Authors
   - `GET {{API_URL}}/authors/{{id}}` - Get Single Author
   - `POST {{API_URL}}/authors` - Create Author (Auth Required)

6. **Global Settings**
   - `GET {{API_URL}}/global-settings` - Get Global Settings
   - `PUT {{API_URL}}/global-settings` - Update Global Settings (Auth Required)

### Expected Sample Data

After running the bootstrap, you should have:

- **6 Tags**: AWS, Azure, Security, Migration, DevOps, Cloud Computing
- **3 Authors**: John Smith, Sarah Johnson, Mike Chen
- **5 Articles**: Cloud Migration Guide, Cybersecurity Best Practices, AWS vs Azure, DevOps Best Practices, Cost Optimization
- **3 Categories**: Cloud Computing, Security, IT Consulting
- **1 Global Setting**: Complete CloudNow site configuration

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

### Users (2)

- admin@cloudnowservices.com (Admin role)
- editor@cloudnowservices.com (Editor role)

### Custom Roles (2)

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

_Last updated: January 16, 2025_
