import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const headerLinks = [
  {
    location: "/travel/",
    title: "🛬 Travel and Accommodations",
  },
  {
    location: "/registry/",
    title: "🎁 Registry",
  },
  {
    location: "/attractions/",
    title: "📍 Recommendations",
  },
  {
    location: "/photos/",
    title: "📸 Photos",
  },
  {
    location: "/faq/",
    title: "🙋 FAQ",
  },
]

const Header = ({ siteTitle }) => (
  <div className="flex flex-col lg:flex-row justify-between bg-[#afeaaf] min-h-16 py-4 pl-8 mb-12">
    <div className="grow">
      <Link to="/" className="font-bold">{siteTitle}</Link>
    </div>
    <div className="flex flex-col lg:flex-row ">
      {headerLinks.map(headerLink => (
          <div>
        <Link
          className="mr-6 cursor-pointer hover:underline min-w-max"
          to={headerLink.location}
        >
          {headerLink.title}
        </Link>
        </div>
      ))}
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
