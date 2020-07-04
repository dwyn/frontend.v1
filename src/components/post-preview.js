import React from "react";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography"
import { Highlight } from "react-instantsearch-dom"
// import CustomHighlight from "./custom-highlight"

const PostPreview = ({ hit }) => {
  // let exceptSnippet = <section> <Highlight hit={hit} attribute="excerpt" tagName="mark" /> </section>
  return (
    <article style={{
      height: '4em', // Need to figure out a better solution here
      marginBottom: rhythm(3/4),
      display: 'flex'
    }}>
      
        <div style={{
          float: 'left',
          paddingTop: '.20em',
          width: '8em',
          fontFamily: 'Muli, sans-serif',
        }}>
        
          {new Date(hit.frontmatter.date).toLocaleDateString()}
        </div>
      
      <header style={{
        // flex: '50%',
      }}>
        
        <h3 style={{
          marginBottom: rhythm(1 / 16),
          fontFamily: 'Josefin, sans-serif',
          marginTop: 0,
        }}>
          
          <Link style={{ boxShadow: `none` }} to={hit.fields.slug}>
              {hit.frontmatter.title}
              <Highlight hit={hit} attribute="title" tagName="mark" />
            </Link>
        </h3>
        
        <section style={{
          fontFamily: 'Muli Italic, sans-serif',
          fontSize: '.95em',
          fontStyle: 'italic',
          // fontSize: '.95em'
        }}> {hit.frontmatter.description} </section>

      </header>
    </article>
  )
}

export default PostPreview;