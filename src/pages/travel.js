import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Travel and Accommodations" />
    <h1>Travel and Accommodations</h1>
    <div className="text-lg underline mb-6">By Plane</div>
    <div>
      Alexandria is most easily accessible from National Airport (DCA). It is a
      7-minute drive (or a 90-minute walk!) from the venue. It is also connected
      to the Metro (see below).
      <br></br>
      <br></br>
      The next-best option is Dulles (IAD), which is a 45-minute drive (and a
      robust 10-hour walk!) from the venue. We all dream of the day this airport
      is connected to the Metro, but for now the bus connection is nothing to
      sneeze at.
      <br></br>
      <br></br>
      The other local airport, Baltimore-Washington International (BWI), is a
      lot more “Baltimore” than “Washington.” Without traffic it’s no farther
      away than Dulles, but “without traffic” is normally a pipe dream. That
      said, it is a hub for Spirit Airlines, and Emily and I have flown here
      many times to get the best deal on flights from the Bay Area.
    </div>
    <div className="text-lg underline my-6">By Rail</div>
    <div>
      For light rail, the venue is a 25-minute walk from the King Street Metro
      Station. Walk east along King Street from the station toward the water and
      you will pass through Alexandria’s main commercial strip. Lots of charming
      local businesses (and for some reason a massive Patagonia storefront). See
      the Recommendations section for a list of our favorite shops along the
      way!
      <br></br>
      <br></br>
      For heavy rail, the venue is a 30-minute walk from the Alexandria Amtrak
      Station (ALX). The directions are essentially the same as for light rail:
      walk a few steps north to King Street and then head east toward the river.
    </div>
    <div className="text-lg underline my-6">By Car</div>
    <div>
      There is a massive parking garage called Colonial Parking just across the
      street from the venue at 102 N Union Street, Alexandria, VA 22314. You can
      park there for the duration of the wedding for under $15.
      <br></br>
      <br></br>
      More parking information is available{" "}
      <a
        target="_blank"
        className="underline"
        href="https://github.com/priyadarshy/ethan-and-emily/raw/master/src/images/parking.pdf"
      >
        here
      </a>
    </div>
    <div className="text-lg underline my-6">Lodging</div>
    <div>
      We will be staying at the Hotel Indigo on 220 S Union St, Alexandria, VA
      22314 (4-minute walk to the venue). Unfortunately, we could only reserve a
      small block of rooms. If you have not already heard from us or our
      parents, you will need to book your own room.
      <br></br>
      <br></br>
      Other nearby hotels we like are the Alexandrian on 480 King St,
      Alexandria, VA 22314 (6-minute walk); the Hyatt Centric Old Town on 1625
      King St, Alexandria, VA 22314 (21-minute walk); and the Hilton Garden Inn
      Alexandria Old Town on 1620 Prince St, Alexandria, VA 22314 (22-minute
      walk).
      <br></br>
      <br></br>A longer list of hotels is available{" "}
      <a
        target="_blank"
        className="underline"
        href="https://github.com/priyadarshy/ethan-and-emily/raw/master/src/images/hotels.pdf"
      >
        here
      </a>
    </div>
  </Layout>
)

export default IndexPage
