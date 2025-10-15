import type { Schema, Struct } from '@strapi/strapi';

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
      'shared.link': SharedLink;
      'shared.logo-link': SharedLogoLink;
    }
  }
}
