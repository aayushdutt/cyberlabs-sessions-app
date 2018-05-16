import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

export default function Event(props) {
let imageName = props.eventData.imageName ? props.eventData.imageName : "fallback.png"; 

  return (     
  <li key={props.eventData.key} className="event"><img src={require('../images/' + imageName)} />
    <div className="info">
      <h3 style={{display: 'inline'}}>{props.eventData.title}</h3>
      <div className="row"><span className="label">When:</span>{props.eventData.date}<span>, </span>{props.eventData.time}</div>
      <div className="row"><a href className="calltoaction"> </a></div>
    </div>
</li>
  )
}

