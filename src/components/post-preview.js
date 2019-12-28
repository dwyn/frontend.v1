import React from "react";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography"
import { Highlight } from "react-instantsearch-dom"

const PostPreview = ({ hit }) => {
  const title = hit.frontmatter.title || hit.fields.slug
  return (
    <article>
      <header>
        
        <h3 style={{ marginBottom: rhythm(1 / 4),}}>
          <Link style={{ boxShadow: `none` }} to={hit.slug}>
            {hit.frontmatter.title}
            <Highlight hit={hit} attribute="title" tagName="mark" />
          </Link>
        </h3>
      
        <small>{new Date(hit.frontmatter.date).toLocaleDateString()}</small>
      
      </header>
      <section>
        <Highlight hit={hit} attribute="excerpt" tagName="mark"/> 
      </section>
    </article>
  )
}

export default PostPreview