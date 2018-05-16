import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import Event from '../components/event'

export default function Index({ data }) {
let  { edges: posts } = data.allMarkdownRemark;

let eventList = posts.map((post) => {
  return <Event />
})
  return (
  
       <div><strong>Cyber Labs has ended for this semester!</strong>
        <p><strong>Coming next Semester:</strong> Lots of fun activities and workshops</p>
        <div className="past">
          <h2>Past Events</h2>
          <ul className="events">
              {eventList}
          </ul>
        </div>
      </div>
  
  
  )
}



export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
  }
`;