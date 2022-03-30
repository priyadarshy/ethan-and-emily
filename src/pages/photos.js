import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const imageClass = "my-10"

const IndexPage = () => (
  <Layout>
    <Seo title="Our Story" />
    <div className="flex-row">
      <StaticImage className={imageClass} src="../images/1-min.jpg" />
      <StaticImage className={imageClass} src="../images/2-min.jpg" />
      <StaticImage className={imageClass} src="../images/3-min.png" />
      <StaticImage className={imageClass} src="../images/4-min.png" />
      <StaticImage className={imageClass} src="../images/5-min.JPG" />
      <StaticImage className={imageClass} src="../images/6-min.png" />
    </div>
  </Layout>
)

export default IndexPage
