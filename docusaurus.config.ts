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

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
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
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
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
          href: "https://website2.ai",
          label: "Home",
          position: "right",
        },
        {
          href: "https://website2.ai/builder",
          label: "Get Started",
          position: "right",
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
