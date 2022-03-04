import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Registry" />
    <h1>Gift Registry</h1>
    <iframe
      className="airtable-embed"
      src="https://airtable.com/embed/shrbY2eilJIsPC90J?backgroundColor=cyan&viewControls=on"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
    ></iframe>
  </Layout>
)

export default IndexPage
