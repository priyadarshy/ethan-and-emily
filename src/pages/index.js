import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Emily and Ethan" />
    <h1>Emily and Ethan</h1>
    <p>Get excited for our wedding.</p>
    <iframe
      class="airtable-embed"
      src="https://airtable.com/embed/shrf731SgfqBR8kNv?backgroundColor=cyan"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="733"
    ></iframe>
  </Layout>
)

export default IndexPage
