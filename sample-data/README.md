# Sample Data Import Guide

This folder contains sample data for your CloudNow Strapi blog system. You can manually import this data through the Strapi admin panel.

## 📁 Files Included

### 1. `tags.json`
Contains 6 sample tags:
- AWS (#FF9900)
- Azure (#0078D4) 
- Security (#DC2626)
- Migration (#7C3AED)
- DevOps (#059669)
- Cloud Computing (#3B82F6)

### 2. `articles.json`
Contains 5 sample articles:
- Getting Started with Cloud Migration: A Complete Guide
- Cybersecurity Best Practices for Small Businesses
- AWS vs Azure: Choosing the Right Cloud Platform
- DevOps Best Practices for Cloud Infrastructure
- Cost Optimization Strategies for Cloud Computing

### 3. `authors.json`
Contains 3 sample authors:
- John Smith (Cloud Architect)
- Sarah Johnson (Cybersecurity Expert)
- Mike Chen (DevOps Engineer)

## 🚀 How to Import

### Step 1: Access Strapi Admin
1. Go to `http://localhost:1337/admin`
2. Login with your admin credentials

### Step 2: Import Tags
1. Go to **Content Manager** → **Tag**
2. Click **Create new entry**
3. Copy data from `tags.json` and paste into the form
4. Save and publish each tag

### Step 3: Import Authors
1. Go to **Content Manager** → **Author**
2. Click **Create new entry**
3. Copy data from `authors.json` and paste into the form
4. Save and publish each author

### Step 4: Import Articles
1. Go to **Content Manager** → **Article**
2. Click **Create new entry**
3. Copy data from `articles.json` and paste into the form
4. **Important**: You'll need to manually link:
   - **Category**: Select from existing categories (Cloud Computing, Security, IT Consulting)
   - **Author**: Select from imported authors
   - **Tags**: Select multiple tags as needed
5. Save and publish each article

## 🔗 Manual Linking Guide

### Article-Tag Relationships
- **Cloud Migration Guide**: AWS, Migration
- **Cybersecurity Guide**: Security
- **AWS vs Azure**: AWS, Azure
- **DevOps Guide**: DevOps, Cloud Computing
- **Cost Optimization**: Cloud Computing

### Article-Category Relationships
- **Cloud Migration Guide**: Cloud Computing
- **Cybersecurity Guide**: Security
- **AWS vs Azure**: Cloud Computing
- **DevOps Guide**: IT Consulting
- **Cost Optimization**: Cloud Computing

### Article-Author Relationships
- **Cloud Migration Guide**: John Smith
- **Cybersecurity Guide**: Sarah Johnson
- **AWS vs Azure**: John Smith
- **DevOps Guide**: Mike Chen
- **Cost Optimization**: John Smith

## ✅ Benefits of Manual Import

1. **No Relationship Errors**: Avoids the many-to-many relationship issues
2. **Full Control**: You can customize each entry as needed
3. **Visual Interface**: Use Strapi's intuitive admin interface
4. **Validation**: Strapi validates data before saving
5. **Preview**: See how content looks before publishing

## 🎯 Next Steps

After importing all sample data:
1. Test the APIs to ensure everything works
2. Customize content as needed
3. Add more articles, tags, and authors
4. Configure SEO settings
5. Set up content workflows

## 📝 Notes

- All dates are set to recent dates (January 2025)
- Articles are set to "published" status
- Featured articles are marked appropriately
- Reading times are estimated based on content length
- All content includes proper SEO metadata
