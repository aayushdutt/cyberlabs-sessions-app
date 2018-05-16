import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Link from 'gatsby-link'
import Media from 'react-media'

import Sidebar from '../components/sidebar'
import Header from '../components/header'
import './index.min.css'
import favicon from './favicon.ico'

const Layout = ({ children, data }) => (
  <div>
    <Helmet  title="Cyber Labs - Sessions"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}>
     
      
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600'  />
            

      <link rel='shortcut icon' type='image/x-icon' href={favicon} />    
    </Helmet>
    <Header />


  
  <section className="centered" style={{marginTop:100}}>{children()}</section>
  
  
  
  
  
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
