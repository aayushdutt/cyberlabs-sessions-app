import React from 'react'
import Link from 'gatsby-link'
import headerImage from '../images/cyberlabslogo.jpg'

const Header = () => (
  <div>
    <div className="wrapper">
      <header><Link id="logo" to="/"><img src={headerImage} style={{width: '80%'}} /></Link>
        <div className="headerlinks centered">
          <Link to="/materials" style={{float: 'right', fontSize: 17}}>MATERIALS</Link>
          <Link to="/about" style={{float: 'center', fontSize: 17}}>ABOUT US</Link>
          <Link to="/" style={{float: 'left', fontSize: 17}}>SCHEDULE</Link>
        </div>
      </header>
    </div>
  </div>
);

export default Header
