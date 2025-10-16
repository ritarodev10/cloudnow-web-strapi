# Clean Database Script
# This script will help you clean up the database and start fresh

echo "🧹 Cleaning up database..."

# Stop Strapi if running
echo "⏹️ Stopping Strapi..."
pkill -f "strapi develop" || true

# Backup current database
echo "💾 Backing up current database..."
cp .tmp/data.db .tmp/data.db.backup

# Remove database
echo "🗑️ Removing database..."
rm -f .tmp/data.db

echo "✅ Database cleaned!"
echo ""
echo "🚀 Next steps:"
echo "1. Run: npm run develop"
echo "2. Go to: http://localhost:1337/admin"
echo "3. Create a new admin user"
echo "4. Use the sample-data folder to import content manually"
echo ""
echo "📁 Sample data available in: sample-data/"
echo "📖 Import guide: sample-data/README.md"
