import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Registry" />
    <h1>Gift Registry</h1>
    <div>
      Welcome! Below is a list of items we would like with links to vendors
      where you can buy them new. As an alternative to using the links, we
      strongly encourage you to shop used (we use eBay, Mercari, Etsy (sort by
      vintage), OfferUp, and Craigslist). We would also sincerely love it if you
      already have one of these items collecting dust on a shelf and would like
      to give it to us instead.
      <br></br>
      <br></br>
      In lieu of material goods, we would also greatly appreciate donations to
      our Honeymoon fund. We have listed some specific excursions/expenses you
      can contribute to, and we would also happily accept unspecified honeymoon
      donations. We will be sure to send you lots of photos regardless of the
      option you choose!
      <br></br>
      <br></br>
      <b>Important Details:</b> We ask that you e-mail us whichever item you
      pick so that we can make note of the fact that the item is spoken for.
      Send your decisions to Stone.Ethan@protonmail.com
      <br></br>
      <br></br>
      You can ship the items to: 7202 Rebecca Drive, Alexandria, VA, 22307. We
      will also have a gift table at the entrance to the venue on the big day.
      <br></br>
      <br></br>
      For Honeymoon donations, you can mail a check to the 7202 Rebecca Drive
      address or Venmo Emily (@Emily-Kuhbach) or Ethan (@Ethan-Stone) directly.
      <br></br>
      <br></br>
      Feel free to text us if you have questions. Please also feel free not to
      get us anything, we won’t be offended! Just come to the wedding and have a
      good time.
    </div>
    <iframe
      className="airtable-embed mt-10"
      src="https://airtable.com/embed/shrexxMhkFrzPqUFx?backgroundColor=cyan&viewControls=on"
      frameborder="0"
      onmousewheel=""
      width="100%"
      height="533"
    ></iframe>
  </Layout>
)

export default IndexPage
