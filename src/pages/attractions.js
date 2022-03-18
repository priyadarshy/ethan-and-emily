import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Attractions = () => (
  <Layout>
    <Seo title="Recommendations" />
    <h1>Recommendations</h1>
    <iframe
      className="airtable-embed mt-10"
      src="https://airtable.com/embed/shrPSLh1z0HDPcL35?backgroundColor=cyan&viewControls=on"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
    ></iframe>
  </Layout>
)

export default Attractions
