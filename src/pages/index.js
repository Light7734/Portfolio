import * as React from "react"
import Layout from '../components/layout'
import { header, btn } from '../styles/home.module.css'
import { graphql } from 'gatsby'

// markup
export default function Home({ data }) {
    const { link } = data.site.siteMetadata.socials.github
    const homepage = link + "/homepage"

    return (
        <Layout pageTitle="Homepage">
            <section className={header}>
                <div>
                    <h2>Site under construction </h2>
                    <h3>Thanks for your patience ^_^ </h3>
                    <a className={btn} href={homepage}> Source Code </a>
                </div>
            </section>
        </Layout >

    )
}

export const query = graphql`
query AboutData{
  site {
siteMetadata {
socials{
        github {
          name
          link
}
}
      }
  }
}
`;
