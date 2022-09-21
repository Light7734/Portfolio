module.exports = {

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
            }
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
            resolve: `gatsby-plugin-sass`
        },


        {
            resolve: `gatsby-plugin-mdx`,
            extensions: [`.md`, `.mdx`]
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `articles`,
                path: `${__dirname}/src/articles`,
            },
        },


        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images
        `gatsby-transformer-remark`,
    ],

}
