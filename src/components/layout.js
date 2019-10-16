import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
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
        <div>
        <Content>
                <link href="https://fonts.googleapis.com/css?family=Rokkitt&display=swap" rel="stylesheet"/>
                <Header siteTitle={data.site.siteMetadata.title} />
                <Stuff>
                    {children}
                </Stuff>
            </Content>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout

const Content = styled.div`
   width: 100%;
   min-height: 98vh;
   margin-bottom: -100px;
`

const Stuff = styled.div`
`
