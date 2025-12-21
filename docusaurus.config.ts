import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Website2AI Docs",
  tagline: "AI로 웹사이트를 만드세요",
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
    defaultLocale: "ko",
    locales: ["ko"],
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
          label: "홈페이지",
          position: "right",
        },
        {
          href: "https://website2.ai/builder",
          label: "시작하기",
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
