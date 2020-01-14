import React from "react";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography"
import { Highlight } from "react-instantsearch-dom"

const PostPreview = ({ hit }) => {
  // const title = hit.frontmatter.title || hit.fields.slug // Not sure I still need this line? Ill keep it for now...

  return (
    <article style={{ marginBottom: rhythm(1 / 8), }}>
      <header>
        <h3 style={{ marginBottom: rhythm(1 / 8),}}>
          <Link style={{ boxShadow: `none` }} to={hit.fields.slug}>
            {hit.frontmatter.title}
            <Highlight hit={hit} attribute="title" tagName="mark" />
          </Link>
        </h3>
      
        <medium>{new Date(hit.frontmatter.date).toLocaleDateString()}</medium>
      
      </header>
      <section>
        <Highlight hit={hit} attribute="excerpt" tagName="mark"/> 
      </section>
    </article>
  )
}

export default PostPreview