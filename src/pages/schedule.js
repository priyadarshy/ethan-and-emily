import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Schedule = () => (
  <Layout>
    <Seo title="Schedule" />
    <h1>Schedule</h1>
    <iframe
      className="airtable-embed mt-10"
      src="https://airtable.com/embed/shrQRclgoZToSgwIy?backgroundColor=cyan&viewControls=on"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
    ></iframe>
  </Layout>
)

export default Schedule
