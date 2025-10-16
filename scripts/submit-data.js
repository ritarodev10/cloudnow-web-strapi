const fs = require('fs');
const path = require('path');

// Read the global settings data
const globalSettingsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'website-data/global-settings.json'), 'utf8')
);

// Function to submit data to Strapi
async function submitToStrapi() {
  try {
    console.log('🚀 Starting Strapi data submission...');
    
    // Import Strapi
    const strapi = require('@strapi/strapi');
    
    // Start Strapi instance
    const app = await strapi().load();
    
    console.log('📊 Submitting global settings data...');
    
    // Create or update global settings
    const existingSettings = await strapi.entityService.findMany('api::global-settings.global-settings');
    
    if (existingSettings.length > 0) {
      // Update existing settings
      const updatedSettings = await strapi.entityService.update(
        'api::global-settings.global-settings',
        existingSettings[0].id,
        {
          data: globalSettingsData.data,
          populate: '*'
        }
      );
      console.log('✅ Global settings updated successfully!');
      console.log('📋 Settings ID:', updatedSettings.id);
    } else {
      // Create new settings
      const newSettings = await strapi.entityService.create(
        'api::global-settings.global-settings',
        {
          data: globalSettingsData.data,
          populate: '*'
        }
      );
      console.log('✅ Global settings created successfully!');
      console.log('📋 Settings ID:', newSettings.id);
    }
    
    console.log('🎉 Data submission completed successfully!');
    
    // Close Strapi
    await strapi.destroy();
    
  } catch (error) {
    console.error('❌ Error submitting data to Strapi:', error);
    process.exit(1);
  }
}

// Run the submission
submitToStrapi();
