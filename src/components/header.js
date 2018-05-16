import React from 'react'
import Link from 'gatsby-link'
import headerImage from '../images/cyberlabslogo.jpg'

class Header extends React.Component { 
 constructor(props){
   super(props);
   this.state = {
    activeLinks : ["active", "", ""]
   };
 }


 handleClick = (e)=> {
  if (e.target.pathname === '/' || e.target.parentNode.pathname === '/' )
  this.setState( {
    activeLinks : ["active", "", ""]
   })

   else if (e.target.pathname === '/about')
   this.setState( {
     activeLinks : ["", "active", ""]
    })
  
    else if (e.target.pathname === '/materials')
    this.setState( {
      activeLinks : ["", "", "active"]
     })
 }

 render(){ 
   return (
      <div>
        <div className="wrapper">
          <header><Link onClick={this.handleClick} id="logo" to="/"><img src={headerImage} style={{width: '80%'}} /></Link>
            <div className="headerlinks centered">
              <Link onClick={this.handleClick} className={this.state.activeLinks[2]} to="/materials" style={{float: 'right', fontSize: 17}}>MATERIALS</Link>
              <Link onClick={this.handleClick} to="/about" className={this.state.activeLinks[1]} style={{float: 'center', fontSize: 17}}>ABOUT US</Link>
              <Link onClick={this.handleClick} to="/" className={this.state.activeLinks[0]} style={{float: 'left', fontSize: 17}}>SCHEDULE</Link>
            </div>
          </header>
        </div>
      </div> 
    );
  }
}

export default Header
