import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const headerLinks = [
  {
    location: "/travel/",
    title: "Travel and Accommodations",
  },
  {
    location: "/registry/",
    title: "Registry",
  },
  {
    location: "/attractions/",
    title: "Recommendations",
  },
  {
    location: "/photos/",
    title: "Photos",
  },
  {
    location: "/faq/",
    title: "FAQ",
  },
]

const Header = ({ siteTitle }) => (
  <div className="flex sm:flex-row justify-between bg-orange-200 min-h-16 py-4 pl-8 mb-12">
    <div className="grow">
      <Link to="/">{siteTitle}</Link>
    </div>
    <div className="flex sm:flex-row">
      {headerLinks.map(headerLink => (
        <Link
          className="mr-6 cursor-pointer hover:underline min-w-max"
          to={headerLink.location}
        >
          {headerLink.title}
        </Link>
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
