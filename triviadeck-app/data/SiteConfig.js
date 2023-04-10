const config = {
  siteTitle: "Triviadeck", // Site title.
  siteTitleShort: "Triviadeck", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "The worlds largest collection of trivia questions", // Alternative site title for SEO.
  // siteLogo: "/", // Logo used for SEO and manifest.
  siteUrl: "https://triviadeck-app.web.app/", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links.
  siteDescription: "Your digital deck of trivia cards. Curated by the Triviadeck community.", // Website description used for RSS feeds/meta description tag.

  googleAnalyticsID: "UA-181112847-1", // GA tracking ID.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.

  copyright: "Copyright © 2021 Triviadeck", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#00174D", // Used for setting manifest and progress theme colors.
  backgroundColor: "#fff" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  // config.pathPrefix = "";
  config.pathPrefix = "/";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
