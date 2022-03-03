import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Ethan and Emily" />
    <h1>Ethan and Emily</h1>
    <p>Get excited for our wedding.</p>
    <StaticImage
      src="../images/ethan_and_emily_splash.png"
      alt="The beautiful couple"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
