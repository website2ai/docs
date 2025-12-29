import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Website2AI Docs",
  tagline: "Turn your ideas into websites with AI",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://docs.website2.ai",
  baseUrl: "/",

  organizationName: "website2ai",
  projectName: "docs",
  trailingSlash: false,

  onBrokenLinks: "throw",

  // SEO: Add headTags for additional meta information
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "keywords",
        content:
          "AI website builder, website generator, AI web development, no-code website, React website builder, Website2AI",
      },
    },
    {
      tagName: "meta",
      attributes: {
        name: "author",
        content: "Website2AI",
      },
    },
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ko"],
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
      },
      ko: {
        label: "한국어",
        direction: "ltr",
        htmlLang: "ko-KR",
        calendar: "gregory",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-ZQEQ58GPZN",
          anonymizeIP: true,
        },
        // SEO: Sitemap configuration
        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // SEO: Add site-wide metadata
    metadata: [
      {
        name: "description",
        content:
          "Website2AI documentation - Learn how to create websites with AI. Comprehensive guides for AI-powered website generation, features, pricing, and best practices.",
      },
      {
        name: "og:title",
        content: "Website2AI Documentation",
      },
      {
        name: "og:description",
        content:
          "Create websites with AI - No coding required. Learn how to use Website2AI to generate production-ready React websites from natural language.",
      },
      {
        name: "og:type",
        content: "website",
      },
      {
        name: "og:image",
        content: "https://docs.website2.ai/img/logo.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Website2AI Documentation",
      },
      {
        name: "twitter:description",
        content:
          "Create websites with AI - No coding required. Comprehensive documentation for Website2AI.",
      },
      {
        name: "twitter:image",
        content: "https://docs.website2.ai/img/logo.png",
      },
    ],
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Website2AI",
      logo: {
        alt: "Website2AI",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          label: "Docs",
          position: "left",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://website2.ai",
          label: "Home",
          position: "right",
          className: "navbar-external-link",
        },
        {
          href: "https://website2.ai/builder",
          label: "Get Started",
          position: "right",
          className: "navbar-external-link",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `© ${new Date().getFullYear()} Website2AI`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
