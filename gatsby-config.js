require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

const siteQuery = `{
  allMarkdownRemark {
    nodes {
      frontmatter {
        title
        date
        description
      }
      fields{
        slug 
      }
      excerpt
    }
  }
}`

const queries = [
  {
    query: siteQuery,
    transformer: ({ data }) => data.allMarkdownRemark.nodes,
  }
];

module.exports = {
  siteMetadata: {
    title: `dwayne.fm`,
    author: `dwayne.`,
    description: `Musings. Music. Modern-Day Hieroglyphs.`,
    siteUrl: `https://dwayne.fm`,
    social: {
      twitter: `dwyn`,
    },
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    
    {
      resolve: `gatsby-transformer-remark`,  // parses markdown files to get useful information
      options: {
        plugins: [
          // `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: '÷',
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },

          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },

          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },

        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-140813777-1",
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                const siteUrl = site.siteMetadata.siteUrl;
                const postText = `
                <div style="margin-top=55px; font-style: italic;">(This is an article posted to my blog at dwayne.fm. You can read it online by <a href="${siteUrl +
                  edge.node.fields.slug}">clicking here</a>.)</div>
              `;

                let html = edge.node.html;

                html = html
                  .replace(/href="\//g, `href="${siteUrl}/`)
                  .replace(/src="\//g, `src="${siteUrl}/`)
                  .replace(/"\/static\//g, `"${siteUrl}/static/`)
                  .replace(/,\s*\/static\//g, `,${siteUrl}/static/`);

                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': html + postText }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 250)
                      html
                      fields { 
                        slug   
                      }
                      frontmatter {
                        title
                        date
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "dwayne.fm's RSS feed.",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    
  ],
}
