/**
 * Builder.io Component Registry
 *
 * Registers content-editor-friendly blocks for use in Builder.io's visual
 * editor. These are high-level, composed sections built for content marketers
 * and non-technical editors — not the raw, developer-oriented UI primitives.
 *
 * Each component has meaningful inputs (headline, image, link, etc.) and
 * renders a complete, on-brand section on its own.
 *
 * Import this array and pass it to the `customComponents` prop of <Content />.
 */

import type { RegisteredComponent } from "@builder.io/sdk-react";

import {
  AnnouncementBar,
  CallToAction,
  FAQSection,
  FeatureSpotlight,
  HeroBanner,
  HighlightBadge,
  LinkButton,
  NewsletterSignup,
  ProductCard,
  ProductGrid,
  RichTextSection,
  SectionHeading,
  StatBlock,
  Testimonial,
} from "./client/components/builder-blocks";

// Reusable link sub-fields used by several blocks.
const linkSubFields = [
  { name: "label", type: "text", friendlyName: "Button Label", defaultValue: "Learn More" },
  { name: "url", type: "url", friendlyName: "Link URL", defaultValue: "#" },
  {
    name: "style",
    type: "text",
    friendlyName: "Button Style",
    defaultValue: "primary",
    enum: [
      { label: "Primary (solid)", value: "primary" },
      { label: "Secondary", value: "secondary" },
      { label: "Outline", value: "outline" },
      { label: "Ghost", value: "ghost" },
      { label: "Text link", value: "link" },
    ],
  },
];

const IMAGE_FILE_TYPES = ["jpeg", "jpg", "png", "webp", "svg"];

export const customComponents: RegisteredComponent[] = [
  // ─── Hero Banner ───────────────────────────────────────────────────────────
  {
    component: HeroBanner,
    name: "Hero Banner",
    friendlyName: "Hero Banner",
    description: "Full-width hero section with background image, headline, and up to two call-to-action buttons.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fdefault%2Fhero-block.svg",
    inputs: [
      {
        name: "backgroundImage",
        type: "file",
        friendlyName: "Background Image",
        allowedFileTypes: IMAGE_FILE_TYPES,
        helperText: "Full-bleed image behind the text",
      },
      {
        name: "eyebrow",
        type: "text",
        friendlyName: "Eyebrow / Tag",
        defaultValue: "New Collection",
        helperText: "Small tagline above the headline",
      },
      {
        name: "headline",
        type: "text",
        friendlyName: "Headline",
        defaultValue: "Find Your Path in the Wild",
        required: true,
      },
      {
        name: "description",
        type: "longText",
        friendlyName: "Description",
        defaultValue:
          "Premium gear inspired by the rugged beauty of the outdoors. Lightweight, durable, and ready for your next adventure.",
      },
      {
        name: "primaryCta",
        type: "object",
        friendlyName: "Primary Button",
        subFields: linkSubFields,
        defaultValue: { label: "Shop Now", url: "/shop", style: "primary" },
      },
      {
        name: "secondaryCta",
        type: "object",
        friendlyName: "Secondary Button",
        subFields: linkSubFields,
        defaultValue: { label: "Learn More", url: "/about", style: "outline" },
      },
      {
        name: "height",
        type: "text",
        friendlyName: "Height",
        defaultValue: "large",
        enum: [
          { label: "Small (50vh)", value: "small" },
          { label: "Medium (65vh)", value: "medium" },
          { label: "Large (80vh)", value: "large" },
        ],
      },
      {
        name: "alignment",
        type: "text",
        friendlyName: "Text Alignment",
        defaultValue: "left",
        enum: [
          { label: "Left", value: "left" },
          { label: "Center", value: "center" },
        ],
      },
      {
        name: "overlayOpacity",
        type: "number",
        friendlyName: "Image Darkness (%)",
        defaultValue: 20,
        min: 0,
        max: 90,
        helperText: "Darkens the background image for text legibility",
        advanced: true,
      },
    ],
  },

  // ─── Announcement Bar ──────────────────────────────────────────────────────
  {
    component: AnnouncementBar,
    name: "Announcement Bar",
    friendlyName: "Announcement Bar",
    description: "Thin banner at the top of the page for promotions or important messages.",
    inputs: [
      {
        name: "message",
        type: "text",
        friendlyName: "Message",
        defaultValue: "Free shipping on orders over $75",
        required: true,
      },
      {
        name: "linkLabel",
        type: "text",
        friendlyName: "Link Label",
        defaultValue: "Shop now",
      },
      {
        name: "linkUrl",
        type: "url",
        friendlyName: "Link URL",
        defaultValue: "/shop",
      },
      {
        name: "tone",
        type: "text",
        friendlyName: "Color",
        defaultValue: "primary",
        enum: [
          { label: "Primary", value: "primary" },
          { label: "Secondary", value: "secondary" },
          { label: "Dark", value: "dark" },
        ],
      },
    ],
  },

  // ─── Section Heading ───────────────────────────────────────────────────────
  {
    component: SectionHeading,
    name: "Section Heading",
    friendlyName: "Section Heading",
    description: "Reusable section title with optional eyebrow, description, and view-all link.",
    inputs: [
      {
        name: "eyebrow",
        type: "text",
        friendlyName: "Eyebrow",
        helperText: "Small tagline above the title",
      },
      {
        name: "title",
        type: "text",
        friendlyName: "Title",
        defaultValue: "Section Title",
        required: true,
      },
      {
        name: "description",
        type: "longText",
        friendlyName: "Description",
      },
      {
        name: "alignment",
        type: "text",
        friendlyName: "Alignment",
        defaultValue: "left",
        enum: [
          { label: "Left", value: "left" },
          { label: "Center", value: "center" },
        ],
      },
      {
        name: "viewAllLabel",
        type: "text",
        friendlyName: "View All Link Label",
        helperText: "Optional link shown on the right",
      },
      {
        name: "viewAllUrl",
        type: "url",
        friendlyName: "View All URL",
      },
    ],
  },

  // ─── Product Card ──────────────────────────────────────────────────────────
  {
    component: ProductCard,
    name: "Product Card",
    friendlyName: "Product Card",
    description: "Single product tile with image, name, description, and price.",
    inputs: [
      {
        name: "image",
        type: "file",
        friendlyName: "Product Image",
        allowedFileTypes: IMAGE_FILE_TYPES,
        required: true,
      },
      {
        name: "imageAlt",
        type: "text",
        friendlyName: "Image Alt Text",
        helperText: "Describe the image for screen readers",
      },
      {
        name: "name",
        type: "text",
        friendlyName: "Product Name",
        defaultValue: "Product Name",
        required: true,
      },
      {
        name: "description",
        type: "text",
        friendlyName: "Short Description",
        defaultValue: "One-line product summary",
      },
      {
        name: "price",
        type: "text",
        friendlyName: "Price",
        defaultValue: "$99.00",
      },
      {
        name: "badge",
        type: "text",
        friendlyName: "Badge",
        helperText: 'Optional tag like "Best Seller" or "New"',
      },
      {
        name: "productUrl",
        type: "url",
        friendlyName: "Product Link",
        helperText: "Where the card links to",
      },
    ],
  },

  // ─── Product Grid ──────────────────────────────────────────────────────────
  {
    component: ProductGrid,
    name: "Product Grid",
    friendlyName: "Product Grid",
    description: "Section with a heading and a grid of product cards.",
    inputs: [
      {
        name: "eyebrow",
        type: "text",
        friendlyName: "Eyebrow",
        defaultValue: "Featured",
      },
      {
        name: "title",
        type: "text",
        friendlyName: "Title",
        defaultValue: "Most Popular",
        required: true,
      },
      {
        name: "description",
        type: "longText",
        friendlyName: "Description",
        defaultValue: "Essentials for every adventurer's kit.",
      },
      {
        name: "viewAllLabel",
        type: "text",
        friendlyName: "View All Link Label",
        defaultValue: "View all products",
      },
      {
        name: "viewAllUrl",
        type: "url",
        friendlyName: "View All URL",
        defaultValue: "/shop",
      },
      {
        name: "background",
        type: "text",
        friendlyName: "Background",
        defaultValue: "default",
        enum: [
          { label: "White", value: "default" },
          { label: "Muted", value: "muted" },
        ],
      },
      {
        name: "products",
        type: "list",
        friendlyName: "Products",
        defaultValue: [
          {
            image: "https://images.pexels.com/photos/17827044/pexels-photo-17827044.jpeg",
            name: "Alpine Expedition Tent",
            description: "Ultralight 2-person shelter",
            price: "$299.00",
            badge: "Best Seller",
            productUrl: "/shop",
          },
          {
            image: "https://images.pexels.com/photos/2416871/pexels-photo-2416871.jpeg",
            name: "Summit Hiker Backpack",
            description: "45L multi-day pack",
            price: "$149.00",
            productUrl: "/shop",
          },
          {
            image: "https://images.pexels.com/photos/20425232/pexels-photo-20425232.jpeg",
            name: "Trailblazer Multi-Tool",
            description: "Stainless steel essential",
            price: "$45.00",
            productUrl: "/shop",
          },
        ],
        subFields: [
          {
            name: "image",
            type: "file",
            friendlyName: "Product Image",
            allowedFileTypes: IMAGE_FILE_TYPES,
          },
          { name: "name", type: "text", friendlyName: "Name" },
          { name: "description", type: "text", friendlyName: "Description" },
          { name: "price", type: "text", friendlyName: "Price" },
          { name: "badge", type: "text", friendlyName: "Badge" },
          { name: "productUrl", type: "url", friendlyName: "Product Link" },
        ],
      },
    ],
  },

  // ─── Feature Spotlight ─────────────────────────────────────────────────────
  {
    component: FeatureSpotlight,
    name: "Feature Spotlight",
    friendlyName: "Feature Spotlight",
    description: "Side-by-side image and text section with an optional feature list and call to action.",
    inputs: [
      {
        name: "image",
        type: "file",
        friendlyName: "Image",
        allowedFileTypes: IMAGE_FILE_TYPES,
        required: true,
      },
      {
        name: "imageAlt",
        type: "text",
        friendlyName: "Image Alt Text",
      },
      {
        name: "eyebrow",
        type: "text",
        friendlyName: "Eyebrow",
        defaultValue: "Featured Destination",
      },
      {
        name: "title",
        type: "text",
        friendlyName: "Title",
        defaultValue: "A Story Worth Telling",
        required: true,
      },
      {
        name: "description",
        type: "longText",
        friendlyName: "Description",
      },
      {
        name: "features",
        type: "list",
        friendlyName: "Feature List",
        subFields: [
          { name: "title", type: "text", friendlyName: "Title" },
          { name: "description", type: "text", friendlyName: "Description" },
        ],
        defaultValue: [
          { title: "Feature One", description: "Short supporting detail" },
          { title: "Feature Two", description: "Short supporting detail" },
        ],
      },
      {
        name: "cta",
        type: "object",
        friendlyName: "Call To Action",
        subFields: linkSubFields,
        defaultValue: { label: "Learn More", url: "#", style: "primary" },
      },
      {
        name: "imagePosition",
        type: "text",
        friendlyName: "Image Position",
        defaultValue: "left",
        enum: [
          { label: "Left", value: "left" },
          { label: "Right", value: "right" },
        ],
      },
    ],
  },

  // ─── Call To Action ────────────────────────────────────────────────────────
  {
    component: CallToAction,
    name: "Call To Action",
    friendlyName: "Call To Action",
    description: "Full-width band with a headline, supporting text, and a single button.",
    inputs: [
      {
        name: "title",
        type: "text",
        friendlyName: "Title",
        defaultValue: "Join the Adventure",
        required: true,
      },
      {
        name: "description",
        type: "longText",
        friendlyName: "Description",
        defaultValue: "Connect with fellow enthusiasts and find your community.",
      },
      {
        name: "primaryCta",
        type: "object",
        friendlyName: "Button",
        subFields: linkSubFields,
        defaultValue: { label: "Get Started", url: "#", style: "secondary" },
      },
      {
        name: "background",
        type: "text",
        friendlyName: "Background Color",
        defaultValue: "primary",
        enum: [
          { label: "Primary (Pine)", value: "primary" },
          { label: "Secondary (Terracotta)", value: "secondary" },
          { label: "Muted (Cream)", value: "muted" },
        ],
      },
    ],
  },

  // ─── Testimonial ───────────────────────────────────────────────────────────
  {
    component: Testimonial,
    name: "Testimonial",
    friendlyName: "Testimonial",
    description: "Customer quote card with author details and optional star rating.",
    inputs: [
      {
        name: "quote",
        type: "longText",
        friendlyName: "Quote",
        defaultValue: "This is the best gear I've ever owned — it truly changed how I explore.",
        required: true,
      },
      {
        name: "authorName",
        type: "text",
        friendlyName: "Author Name",
        defaultValue: "Jane Explorer",
      },
      {
        name: "authorTitle",
        type: "text",
        friendlyName: "Author Title / Location",
        defaultValue: "Verified Customer",
      },
      {
        name: "authorImage",
        type: "file",
        friendlyName: "Author Photo",
        allowedFileTypes: IMAGE_FILE_TYPES,
      },
      {
        name: "rating",
        type: "number",
        friendlyName: "Star Rating",
        defaultValue: 5,
        min: 0,
        max: 5,
      },
    ],
  },

  // ─── FAQ Section ───────────────────────────────────────────────────────────
  {
    component: FAQSection,
    name: "FAQ Section",
    friendlyName: "FAQ Section",
    description: "Frequently asked questions section with expandable answers.",
    inputs: [
      {
        name: "eyebrow",
        type: "text",
        friendlyName: "Eyebrow",
        defaultValue: "Support",
      },
      {
        name: "title",
        type: "text",
        friendlyName: "Title",
        defaultValue: "Frequently Asked Questions",
        required: true,
      },
      {
        name: "description",
        type: "longText",
        friendlyName: "Description",
      },
      {
        name: "items",
        type: "list",
        friendlyName: "Questions",
        subFields: [
          { name: "question", type: "text", friendlyName: "Question" },
          { name: "answer", type: "longText", friendlyName: "Answer" },
        ],
        defaultValue: [
          {
            question: "How long does shipping take?",
            answer: "Most orders ship within 2 business days and arrive in 3–5 business days.",
          },
          {
            question: "What is your return policy?",
            answer: "We accept returns within 30 days of delivery for a full refund.",
          },
        ],
      },
    ],
  },

  // ─── Newsletter Signup ─────────────────────────────────────────────────────
  {
    component: NewsletterSignup,
    name: "Newsletter Signup",
    friendlyName: "Newsletter Signup",
    description: "Email capture section with a heading and description.",
    inputs: [
      {
        name: "title",
        type: "text",
        friendlyName: "Title",
        defaultValue: "Stay in the Loop",
        required: true,
      },
      {
        name: "description",
        type: "longText",
        friendlyName: "Description",
        defaultValue: "Subscribe for trail guides, gear drops, and exclusive offers.",
      },
      {
        name: "placeholder",
        type: "text",
        friendlyName: "Input Placeholder",
        defaultValue: "Enter your email",
      },
      {
        name: "buttonLabel",
        type: "text",
        friendlyName: "Button Label",
        defaultValue: "Subscribe",
      },
      {
        name: "background",
        type: "text",
        friendlyName: "Background",
        defaultValue: "muted",
        enum: [
          { label: "Muted", value: "muted" },
          { label: "Primary", value: "primary" },
          { label: "White", value: "default" },
        ],
      },
    ],
  },

  // ─── Stat Block ────────────────────────────────────────────────────────────
  {
    component: StatBlock,
    name: "Stat Block",
    friendlyName: "Stat Block",
    description: "Row of large numbers with labels — great for showing impact or milestones.",
    inputs: [
      {
        name: "stats",
        type: "list",
        friendlyName: "Stats",
        subFields: [
          { name: "value", type: "text", friendlyName: "Value" },
          { name: "label", type: "text", friendlyName: "Label" },
          { name: "description", type: "text", friendlyName: "Description" },
        ],
        defaultValue: [
          { value: "10K+", label: "Happy Customers", description: "Across all 50 states" },
          { value: "50+", label: "Trail Guides", description: "Written by experts" },
          { value: "4.9", label: "Avg Rating", description: "From verified reviews" },
          { value: "100%", label: "Guarantee", description: "Or your money back" },
        ],
      },
      {
        name: "background",
        type: "text",
        friendlyName: "Background",
        defaultValue: "default",
        enum: [
          { label: "White", value: "default" },
          { label: "Muted", value: "muted" },
          { label: "Primary", value: "primary" },
        ],
      },
    ],
  },

  // ─── Rich Text Section ─────────────────────────────────────────────────────
  {
    component: RichTextSection,
    name: "Rich Text Section",
    friendlyName: "Rich Text Section",
    description: "Centered heading and body copy — great for editorial content like About or Story sections.",
    inputs: [
      {
        name: "eyebrow",
        type: "text",
        friendlyName: "Eyebrow",
      },
      {
        name: "title",
        type: "text",
        friendlyName: "Title",
        defaultValue: "Our Story",
      },
      {
        name: "body",
        type: "longText",
        friendlyName: "Body",
        defaultValue:
          "Tell your story here. Multiple paragraphs are supported — just add blank lines between them.",
      },
      {
        name: "alignment",
        type: "text",
        friendlyName: "Alignment",
        defaultValue: "center",
        enum: [
          { label: "Center", value: "center" },
          { label: "Left", value: "left" },
        ],
      },
      {
        name: "background",
        type: "text",
        friendlyName: "Background",
        defaultValue: "default",
        enum: [
          { label: "White", value: "default" },
          { label: "Muted", value: "muted" },
        ],
      },
    ],
  },

  // ─── Link Button ───────────────────────────────────────────────────────────
  {
    component: LinkButton,
    name: "Button",
    friendlyName: "Button",
    description: "Standalone button that links to a URL.",
    inputs: [
      {
        name: "label",
        type: "text",
        friendlyName: "Label",
        defaultValue: "Click Me",
        required: true,
      },
      {
        name: "url",
        type: "url",
        friendlyName: "Link URL",
        defaultValue: "#",
      },
      {
        name: "style",
        type: "text",
        friendlyName: "Style",
        defaultValue: "primary",
        enum: [
          { label: "Primary", value: "primary" },
          { label: "Secondary", value: "secondary" },
          { label: "Outline", value: "outline" },
          { label: "Ghost", value: "ghost" },
          { label: "Text link", value: "link" },
        ],
      },
      {
        name: "size",
        type: "text",
        friendlyName: "Size",
        defaultValue: "default",
        enum: [
          { label: "Small", value: "small" },
          { label: "Default", value: "default" },
          { label: "Large", value: "large" },
        ],
      },
    ],
  },

  // ─── Highlight Badge ───────────────────────────────────────────────────────
  {
    component: HighlightBadge,
    name: "Highlight Badge",
    friendlyName: "Highlight Badge",
    description: "Small badge to highlight a status or category (e.g. New, Sale, Featured).",
    inputs: [
      {
        name: "label",
        type: "text",
        friendlyName: "Label",
        defaultValue: "New",
        required: true,
      },
      {
        name: "style",
        type: "text",
        friendlyName: "Style",
        defaultValue: "default",
        enum: [
          { label: "Default", value: "default" },
          { label: "Secondary", value: "secondary" },
          { label: "Outline", value: "outline" },
        ],
      },
    ],
  },
];

// --- Design Tokens ---
// Note: Design token registration using builder.register() is not supported in Gen2 SDK.
// The Gen2 SDK (@builder.io/sdk-react v4) uses a different pattern for design tokens.
// Design tokens should be configured directly in the Builder.io dashboard under
// Space Settings > Design System, or you can create a separate registration file
// that uses the Builder.io REST API to register design tokens programmatically.
//
// For reference, these are the design tokens sourced from client/global.css
// (:root CSS variables) and tailwind.config.ts:
//
// Colors (HSL format):
// - Primary (Pine Green): hsl(var(--primary))
// - Secondary (Terracotta): hsl(var(--secondary))
// - Background (Warm Cream): hsl(var(--background))
// - Foreground (Deep Forest): hsl(var(--foreground))
// - Accent (Sky Blue): hsl(var(--accent))
// - And more UI state colors (muted, destructive, border, etc.)
//
// Font Families:
// - Sans (Inter): Inter, sans-serif
// - Serif (Merriweather): Merriweather, serif
//
// Font Sizes: XS (0.75rem) through 4XL (2.25rem)
// Spacing: 1 (4px) through 16 (64px)
// Border Radius: None, SM, MD, Default (LG), Full
