import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Questions = () => (
  <Layout>
    <Seo title="FAQ" />
    <h1>FAQ</h1>
    <div className="text-lg underline mb-6">Is there parking?</div>
    <div>
      Yes! There is lots of parking nearby. Your best bet is Colonial Parking
      just across the street from the venue at 102 N Union Street, Alexandria,
      VA 22314. You can park there for the duration of the wedding for under
      $15.
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
    <div className="text-lg underline my-6">
      Do you have any hotel recommendations?
    </div>
    <div>
      Yes! You can see more detail on our recommendations in the{" "}
      <Link to="/travel" className="underline">
        “Travel and Accomodations”
      </Link>{" "}
      section of the website. To save you a click, here they are again (ordered
      from closest to farthest):
      <br></br>
      <br></br>
      Hotel Indigo on 220 S Union St, Alexandria, VA 22314
      <br></br>
      <br></br>
      The Alexandrian on 480 King St, Alexandria, VA 22314
      <br></br>
      <br></br>
      The Hyatt Centric Old Town on 1625 King St, Alexandria, VA 22314
      <br></br>
      <br></br>
      The Hilton Garden Inn Alexandria Old Town on 1620 Prince St, Alexandria,
      VA 22314
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
    <div className="text-lg underline my-6">
      Is there transportation to and from the hotels to the ceremony?
    </div>
    <div>
      We will not be providing transportation to the venue. All of the hotels
      recommended in the “Travel and Accomodations” section are within walking
      distance (less than 25 minutes) of the venue. The closest options are
      Hotel Indigo (4-minute walk) and the Alexandrian (6-minute walk).
    </div>
    <div className="text-lg underline my-6">
      What precautions will be taken with regard to COVID-19?
    </div>
    <div>
      If we've learned anything, it's that we cannot predict what the status of
      the COVID-19 pandemic will be in June. Hopefully we’re no more familiar
      with the Greek alphabet come June.
      <br></br>
      <br></br>
      We will follow federal, state, and local venue guidance on COVID-19
      prevention protocols.{" "}
      <b>
        We ask that all guests be vaccinated. We ask that all guests get tested
        within 48 hours of the event.
      </b>{" "}
      For now, we will not be asking guests to wear masks, but you are more than
      welcome to do so! We would like to do everything possible to make sure
      everyone feels safe and welcome.
    </div>
    <div className="text-lg underline my-6">Are kids welcome?</div>
    <div>
      Unfortunately we are asking that you leave the little ones at home for
      this one. If you need help coordinating care, please reach out to us.
    </div>
    <div className="text-lg underline my-6">Will there be torpedoes?</div>
    <div>
      Kind of! The Torpedo Factory was, in fact, a torpedo factory during World
      War II. However, its manufacturing days ended when the war did. After a
      20-year stint as a federal records center (it stored congressional
      documents, dinosaur bones, German war films, and Nuremberg War Crimes
      trial records) the site was purchased by the City of Alexandria and
      converted into a community art center.
      <br></br>
      <br></br>
      Today, the only torpedoes on site have been turned into art:
    </div>
    <StaticImage className="my-10" src="../images/torpedo-min.png" />
    <div className="text-lg underline my-6">
      What if I already know I can't attend?
    </div>
    <div>
      We will miss you, but we totally understand! Please make sure to fill out
      the RSVP form on the{" "}
      <Link to="/" className="underline">
        front page
      </Link>{" "}
      of the website by May 1.
    </div>
    <div className="text-lg underline my-6">
      Who should I call if I have other questions?
    </div>
    <div>
      Please feel free to reach out to Emily and Ethan directly! Emily’s e-mail
      is kuhbach703@gmail.com and phone number is 571-242-4045. Ethan’s e-mail
      is Stone.Ethan@protonmail.com and phone number is 703-673-6077.
    </div>
  </Layout>
)

export default Questions
