import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const headerLinks = [
  {
    location: "/travel/",
    title: "Hotels and Accommodations",
  },
  {
    location: "/attractions/",
    title: "Recommendations",
  },
  {
    location: "/photos/",
    title: "About Us",
  },
  {
    location: "/faq/",
    title: "FAQ",
  },
]

const Header = ({ siteTitle }) => (
  <div className="flex justify-between bg-orange-200 min-h-16 py-4 pl-8 mb-12">
    <div className="flex">
      <Link to="/">{siteTitle}</Link>
    </div>
    <div className="">
      {headerLinks.map(headerLink => (
        <Link
          className="mr-6 cursor-pointer hover:underline"
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
