import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

export default function Event() {
  return (     
  <li className="event"><img src={require('../images/sample.png')} />
    <div className="info">
      <h3 style={{display: 'inline'}}>Web Development with ES6</h3>
      <div className="row"><span className="label">When:</span>17th January, 2018<span>, </span>1:00pm to 9:00am</div>
      <div className="row"><a href className="calltoaction"> </a></div>
    </div>
</li>
  )
}

