/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

let globalPasswordSet

const Layout = ({ children }) => {
  const [password, setPassword] = useState("")

  const updatePassword = async value => {
    const hashedPasswordData = await crypto.subtle.digest(
      "SHA-1",
      new TextEncoder().encode(value)
    )

    const hashedPassword = Array.from(new Uint8Array(hashedPasswordData))
      .map(byte => byte.toString(16).padStart(2, "0"))
      .join("")
    setPassword(hashedPassword)
    if (hashedPassword === "3244d640f25ee56bae77e90a26cce7dffd774450") {
      globalPasswordSet = true
    }
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {password === "3244d640f25ee56bae77e90a26cce7dffd774450" ||
        globalPasswordSet ? (
          <main>{children}</main>
        ) : (
          <label class="block">
            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              type="email"
              name="email"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Check the back of your invite"
              onChange={evt => updatePassword(evt.target.value)}
            />
          </label>
        )}
        <footer
          className="text-xs"
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, This site is built and deployed on
          non-Amazon infrastructure
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
