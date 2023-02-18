import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
    path: `.env`,
});

const config: GatsbyConfig = {
    graphqlTypegen: true,

    siteMetadata: {
        title: `light7734`,
        siteUrl: `https://light7734.com`,
    },

    plugins: [
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `light`,
                short_name: `light`,
                start_url: `/`,
                background_color: `#ff0000`,
                theme_color: `#00ff00`,
                display: `minimal-ui`,
                icon: `${__dirname}/static/icons/light-favicon.svg`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `icons`,
                path: `${__dirname}/src/icons`,
            },
        },

        // arts
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `arts`,
                path: `${__dirname}/src/arts`,
            },
        },

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `code-projects`,
                path: `${__dirname}/src/codeProjects`,
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
        },

        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.md`, `.mdx`],
            }
        },

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `articles`,
                path: `${__dirname}/src/articles`,
            },
        },

        {
            resolve: `gatsby-source-github-api`,
            options: {
                // token: required by the GitHub API
                token: process.env.MY_REPO_TOKEN,

                // GraphQLquery: defaults to a search query
                graphQLQuery: `
                    query {
                      user(login: "Light7734") {
                        repositories(first: 100, orderBy: {direction: DESC, field: STARGAZERS}) {
                          edges {
                            node {
                              forkCount
                              stargazerCount
                              name
                              issues(states: OPEN) {
                                totalCount
                              }

                              watchers {
                                totalCount
                              }
                              
                            }
                          }
                        }
                        followers {
                          totalCount
                        }
                        following {
                          totalCount
                        }
                      }
                    }`,
            },
        },

        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images
        `gatsby-transformer-remark`,
    ],
};

export default config;
