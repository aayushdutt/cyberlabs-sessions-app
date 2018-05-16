import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Link from 'gatsby-link'

import Header from '../components/header'
import './index.min.css'
import favicon from './favicon.ico'

const Layout = ({ children, data }) => (
  <div>
    <Helmet  title="Cyber Labs - Sessions"
      meta={[
        { name: "description", content: "Cyberlabs' Official Sessions Schedule" },
        { name: "keywords", content: "Cyberlabs, Cyber Labs, IIT Dhanbad, IIT (ISM), Dhanbad, Coding Club" }
      ]}>
     
      
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600'  />
            

      <link rel='shortcut icon' type='image/x-icon' href={favicon} />    
    </Helmet>
    <Header />


  
  <section className="centered" style={{marginTop:90}}>{children()}</section>
  
  
  
  
  
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
