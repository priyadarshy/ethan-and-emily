import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Emily and Ethan" />
    <h1>Emily Kuhbach and Ethan Stone</h1>
    <h3>June 11, 2022</h3>
    <h3>Alexandria, Virginia</h3>

    <p>
      Welcome to our wedding website! Browse around for more detail about the
      weekend and please RSVP below by May 1.
    </p>
    <p>We can’t wait to celebrate with you in Alexandria!</p>
    <iframe
      class="airtable-embed"
      src="https://airtable.com/embed/shrgBYYKGL5dI8ykk??backgroundColor=cyan"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="733"
    ></iframe>
  </Layout>
)

export default IndexPage
