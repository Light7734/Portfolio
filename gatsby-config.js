module.exports = {

    siteMetadata: {
        title: `mohammad-hm`,
        siteUrl: `https://www.mohammad-hm.com`,
    },

    plugins: [
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
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`, // Needed for dynamic images
        `gatsby-transformer-remark`,
    ],

    siteMetadata: {
        socials: {
            github: {
                name: "light3039",
                link: "https://github.com/light7734",
            },
            twitter: {
                name: "light7734",
                link: "https://twitter.com/light7734"
            },
            discord: {
                name: "light7734",
                link: "https://discord.com/users/928576662352822353",
            },
        },
    },

}
