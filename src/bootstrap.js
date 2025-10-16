module.exports = async ({ strapi }) => {
  // Check if global settings already exist
  const existingSettings = await strapi.entityService.findMany('api::global-settings.global-settings');
  
  if (existingSettings.length === 0) {
    console.log('🚀 Creating initial CloudNow global settings...');
    
    // Create global settings with CloudNow data
    await strapi.entityService.create('api::global-settings.global-settings', {
      data: {
        siteName: "CloudNow",
        siteDescription: "Specialized IT consulting and cloud services customized to meet your business demands and security needs.",
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
            ariaLabel: "CloudNow Home"
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
              ariaLabel: "Home Page"
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
                  hasDropdown: false,
                  iconPosition: "none",
                  isActive: false,
                  ariaLabel: "Cloud Consulting Services"
                },
                {
                  label: "IT Support",
                  href: "/services/it-support",
                  isExternal: false,
                  target: "_self",
                  hasDropdown: false,
                  iconPosition: "none",
                  isActive: false,
                  ariaLabel: "IT Support Services"
                }
              ],
              iconPosition: "right",
              isActive: false,
              ariaLabel: "Services"
            },
            {
              label: "About Us",
              href: "/about",
              isExternal: false,
              target: "_self",
              hasDropdown: false,
              iconPosition: "none",
              isActive: false,
              ariaLabel: "About CloudNow"
            }
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
            showOnDesktop: true
          }
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
              ariaLabel: "CloudNow Home"
            },
            description: "Specialized IT consulting and cloud services customized to meet your business demands and security needs.",
            copyright: "© 2025 CloudNow. All rights reserved.",
            showLogo: true,
            showDescription: true,
            showCopyright: true
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
                isActive: true
              },
              {
                country: "Canada",
                address: "250 - 997 Seymour St. Vancouver, BC, Canada, V6B 3M1",
                showIcon: true,
                isActive: true
              },
              {
                country: "Indonesia",
                address: "Jl. Mustika No. 143S Surabaya, Jawa Timur, Indonesia, 60246",
                showIcon: true,
                isActive: true
              }
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
                  isActive: true
                },
                {
                  label: "ID",
                  value: "+62 882 0011 43840",
                  href: "tel:+62882001143840",
                  iconType: "phone",
                  isExternal: false,
                  target: "_self",
                  showIcon: true,
                  isActive: true
                }
              ],
              email: {
                label: "Email",
                value: "contact@cloudnowservices.com",
                href: "mailto:contact@cloudnowservices.com",
                iconType: "email",
                isExternal: false,
                target: "_self",
                showIcon: true,
                isActive: true
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
                  isActive: true
                }
              ]
            }
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
                showOnDesktop: true
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
                showOnDesktop: true
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
                showOnDesktop: true
              }
            ]
          },
          newsletter: {
            title: "Subscribe",
            description: "Join our newsletter to stay up to date on features and releases.",
            placeholder: "Enter your email",
            buttonText: "Subscribe",
            privacyText: "By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.",
            showTitle: true,
            showDescription: true,
            showPrivacyText: true
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
                showOnDesktop: true
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
                showOnDesktop: true
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
                showOnDesktop: true
              }
            ]
          }
        }
      }
    });
    
    console.log('✅ CloudNow global settings created successfully!');
  } else {
    console.log('ℹ️ Global settings already exist, skipping creation.');
  }
};
