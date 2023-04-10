const urljoin = require("url-join");
const path = require("path");
const config = require("./data/SiteConfig");

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";
console.log(`Using environment config: '${activeEnv}'`);

require("dotenv").config({
  path: `.env.${activeEnv}`,
});


module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    title: config.siteTitle,
    author: config.author,
    description: config.description,
    // rssMetadata: {
    //   site_url: urljoin(config.siteUrl, config.pathPrefix),
    //   feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
    //   // title: config.siteTitle,
    //   description: config.siteDescription,
    //   image_url: `${urljoin(
    //     config.siteUrl,
    //     config.pathPrefix
    //   )}/logos/logo-512.png`,
    //   copyright: config.copyright
    // }
  },
  plugins: [
    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/static/`
      }
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "posts",
    //     path: `${__dirname}/content/`
    //   }
    // },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 690
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe"
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs"
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-catch-links",
    // "gatsby-plugin-twitter",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icons: [
          {
            src: "static/tdfavicon.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          },
        ],
        icon: 'static/tdfavicon.png',
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`,`/contribute/`, `/community/`, `/privacy-policy/`, `/terms-of-use/`],
      },
    },
    // "gatsby-plugin-remove-serviceworker",
  {
    resolve: '@mkitio/gatsby-theme-password-protect',
    options: {
      // password: process.env.SITE_PASSWORD // delete or `undefined` to disable password protection
    }
  },

  {
    resolve: `gatsby-theme-material-ui`,
    // options: {
    //   stylesConfig: {
    //     // disableAutoprefixing: true,
    //     // disableMinification: true
    //   },
    // },
  },

  {
    resolve: "gatsby-theme-firebase",
    options: {
      credentials: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
      },
      // loginPath: "/loginTest",
      loginRedirectPath: "/",
      socialLogins: ["google"],
    },
  },
  `gatsby-plugin-image`,
  `gatsby-plugin-react-helmet`,

  
  ]
};
