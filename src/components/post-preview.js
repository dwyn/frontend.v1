import React from "react";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography"
import { Highlight } from "react-instantsearch-dom"
// import CustomHighlight from "./custom-highlight"

const PostPreview = ({ hit }) => {
  //let excerptSnippet = <section> <Highlight hit={hit} attribute="excerpt" tagName="mark" /> </section>

  return (
    <article style={{ marginBottom: rhythm(3/4), }}>
        <div>
          <medium style={{ float: 'left', width: '8em' }}>{new Date(hit.frontmatter.date).toLocaleDateString()}</medium>
        </div>
      
      <header>
          <h3 style={{
            marginBottom: rhythm(1 / 16),
            marginLeft: rhythm(1 / 2),
            marginTop: 0,
            fontFamily: 'BentonSans Condensed Regular, sans-serif', 
          }}>
            <Link style={{ boxShadow: `none` }} to={hit.fields.slug}>
              {hit.frontmatter.title}
              <Highlight hit={hit} attribute="title" tagName="mark" />
            </Link>
          </h3>
          <section style={{ fontStyle: 'italic', marginLeft: '6.5em'}}> {hit.frontmatter.description} </section>

      </header>
    </article>
  )
}

export default PostPreview;