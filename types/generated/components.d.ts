import type { Schema, Struct } from '@strapi/strapi';

export interface CompanyCompanyContact extends Struct.ComponentSchema {
  collectionName: 'components_company_company_contacts';
  info: {
    displayName: 'Company Contact';
  };
  attributes: {
    email: Schema.Attribute.Component<'forms.contact-form-item', false>;
    phoneNumbers: Schema.Attribute.Component<'forms.contact-form-item', true>;
    showEmail: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showPhoneNumbers: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    showSocialLinks: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    socialLinks: Schema.Attribute.Component<'forms.contact-form-item', true>;
  };
}

export interface CompanyCompanyInfo extends Struct.ComponentSchema {
  collectionName: 'components_company_company_infos';
  info: {
    displayName: 'Company Info';
  };
  attributes: {
    copyright: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u00A9 2025 CloudNow. All rights reserved.'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Specialized IT consulting and cloud services customized to meet your business demands and security needs.'>;
    logo: Schema.Attribute.Component<'company.company-logo', false>;
    showCopyright: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showDescription: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    showLogo: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface CompanyCompanyLogo extends Struct.ComponentSchema {
  collectionName: 'components_company_company_logos';
  info: {
    displayName: 'Company Logo';
  };
  attributes: {
    ariaLabel: Schema.Attribute.String;
    cloudIcon: Schema.Attribute.Media<'images'>;
    companyName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'CLOUD NOW'>;
    href: Schema.Attribute.String & Schema.Attribute.DefaultTo<'/'>;
    iconPosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    logoImage: Schema.Attribute.Media<'images'>;
    showIcon: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showText: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
  };
}

export interface CompanyCompanyOffices extends Struct.ComponentSchema {
  collectionName: 'components_company_company_offices';
  info: {
    displayName: 'Company Offices';
  };
  attributes: {
    contactInfo: Schema.Attribute.Component<'company.company-contact', false>;
    offices: Schema.Attribute.Component<'company.office-location', true>;
    showContactInfo: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    showOffices: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showTitle: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Our Offices'>;
  };
}

export interface CompanyOfficeLocation extends Struct.ComponentSchema {
  collectionName: 'components_company_office_locations';
  info: {
    displayName: 'Office Location';
  };
  attributes: {
    address: Schema.Attribute.Text & Schema.Attribute.Required;
    country: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showIcon: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ContentLegalLinks extends Struct.ComponentSchema {
  collectionName: 'components_content_legal_links';
  info: {
    displayName: 'Legal Links';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    showSeparator: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface FormsContactFormItem extends Struct.ComponentSchema {
  collectionName: 'components_forms_contact_form_items';
  info: {
    displayName: 'Contact Form Item';
  };
  attributes: {
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    iconType: Schema.Attribute.Enumeration<
      ['phone', 'email', 'linkedin', 'location', 'custom']
    > &
      Schema.Attribute.DefaultTo<'custom'>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    showIcon: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FormsNewsletterSignup extends Struct.ComponentSchema {
  collectionName: 'components_forms_newsletter_signups';
  info: {
    displayName: 'Newsletter Signup';
  };
  attributes: {
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Subscribe'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'Join our newsletter to stay up to date on features and releases.'>;
    placeholder: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Enter your email'>;
    privacyText: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.'>;
    showDescription: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    showPrivacyText: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    showTitle: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Subscribe'>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    bottomBar: Schema.Attribute.Component<'content.legal-links', false>;
    companyInfo: Schema.Attribute.Component<'company.company-info', false>;
    newsletter: Schema.Attribute.Component<'forms.newsletter-signup', false>;
    offices: Schema.Attribute.Component<'company.company-offices', false>;
    quickLinks: Schema.Attribute.Component<'navigation.quick-links', false>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Component<'company.company-logo', false>;
    navigation: Schema.Attribute.Component<'navigation.navigation-item', true>;
  };
}

export interface NavigationNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigation_items';
  info: {
    displayName: 'Navigation Item';
  };
  attributes: {
    ariaLabel: Schema.Attribute.String;
    dropdownItems: Schema.Attribute.Component<
      'navigation.navigation-item',
      true
    >;
    hasDropdown: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    iconPosition: Schema.Attribute.Enumeration<['left', 'right', 'none']> &
      Schema.Attribute.DefaultTo<'none'>;
    isActive: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
  };
}

export interface NavigationQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_navigation_quick_links';
  info: {
    displayName: 'Quick Links';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.link', true>;
    showLinks: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showTitle: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Quick Links'>;
  };
}

export interface SharedBaseLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_base_links';
  info: {
    displayName: 'Base Link';
  };
  attributes: {
    animation: Schema.Attribute.Enumeration<
      ['none', 'fadeIn', 'slideUp', 'bounce']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    ariaLabel: Schema.Attribute.String;
    className: Schema.Attribute.String;
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rel: Schema.Attribute.Enumeration<['nofollow', 'noopener', 'noreferrer']> &
      Schema.Attribute.DefaultTo<'noopener'>;
    showOnDesktop: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showOnMobile: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showOnTablet: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    animation: Schema.Attribute.Enumeration<
      ['none', 'fadeIn', 'slideUp', 'bounce']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    ariaLabel: Schema.Attribute.String;
    className: Schema.Attribute.String;
    href: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    iconPosition: Schema.Attribute.Enumeration<['left', 'right', 'none']> &
      Schema.Attribute.DefaultTo<'none'>;
    isButtonLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String;
    rel: Schema.Attribute.Enumeration<['nofollow', 'noopener', 'noreferrer']> &
      Schema.Attribute.DefaultTo<'noopener'>;
    showOnDesktop: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showOnMobile: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showOnTablet: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    size: Schema.Attribute.Enumeration<['small', 'medium', 'large']> &
      Schema.Attribute.DefaultTo<'medium'>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
    type: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'ghost', 'danger', 'success']
    >;
  };
}

export interface SharedLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    alt: Schema.Attribute.String & Schema.Attribute.Required;
    animation: Schema.Attribute.Enumeration<
      ['none', 'fadeIn', 'slideUp', 'bounce']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    ariaLabel: Schema.Attribute.String;
    aspectRatio: Schema.Attribute.Enumeration<
      ['square', '16:9', '4:3', '3:2', 'free']
    > &
      Schema.Attribute.DefaultTo<'free'>;
    className: Schema.Attribute.String;
    height: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 1000;
          min: 1;
        },
        number
      >;
    hoverEffect: Schema.Attribute.Enumeration<
      ['none', 'scale', 'fade', 'slide']
    > &
      Schema.Attribute.DefaultTo<'none'>;
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    rel: Schema.Attribute.Enumeration<['nofollow', 'noopener', 'noreferrer']> &
      Schema.Attribute.DefaultTo<'noopener'>;
    showOnDesktop: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showOnMobile: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    showOnTablet: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    src: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    srcMobile: Schema.Attribute.Media<'images'>;
    srcTablet: Schema.Attribute.Media<'images'>;
    style: Schema.Attribute.Enumeration<
      ['default', 'dark', 'light', 'monochrome']
    > &
      Schema.Attribute.DefaultTo<'default'>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
    width: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 1000;
          min: 1;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'company.company-contact': CompanyCompanyContact;
      'company.company-info': CompanyCompanyInfo;
      'company.company-logo': CompanyCompanyLogo;
      'company.company-offices': CompanyCompanyOffices;
      'company.office-location': CompanyOfficeLocation;
      'content.legal-links': ContentLegalLinks;
      'forms.contact-form-item': FormsContactFormItem;
      'forms.newsletter-signup': FormsNewsletterSignup;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'navigation.navigation-item': NavigationNavigationItem;
      'navigation.quick-links': NavigationQuickLinks;
      'shared.base-link': SharedBaseLink;
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
    }
  }
}
