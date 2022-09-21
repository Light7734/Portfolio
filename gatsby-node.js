const path = require("path");
const articleTemplate = path.resolve(`./src/templates/article.js`);

exports.createPages = async ({ graphql, actions, reporter }) => {
    const result = await graphql(`
        query {
            allMdx(filter: { frontmatter: { type: { eq: "article" } } }) {
                nodes {
                    id
                    frontmatter {
                        title
                        slug
                        date
                        type
                    }
                    internal {
                        contentFilePath
                    }
                }
            }
        }
    `);

    if (result.errors) {
        reporter.panicOnBuild("Error loading MDX result", result.errors);
    }

    // Create blog post pages.
    const posts = result.data.allMdx.nodes;

    // you'll call `createPage` for each result
    posts.forEach((node) => {
        actions.createPage({
            // As mentioned above you could also query something else like frontmatter.title above and use a helper function
            // like slugify to create a slug
            path: `articles/${node.frontmatter.slug}`,
            // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
            component: `${articleTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
            // You can use the values in this context in
            // our page layout component
            context: { id: node.id },
        });
    });
};
