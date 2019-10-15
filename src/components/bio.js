import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import '../styles/cursor.css';

import { rhythm } from "../utils/typography";
import Typist from 'react-typist';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />

      <div>
        <Typist
          avgTypingDelay={25} 
          startDelay={300}
          cursor={{
            show: true,
            blink: true,
            element: '|',
            hideWhenDone: true,
            hideWhenDoneDelay: 500,
          }}
        >
          
          Written by <strong>{author}</strong> <br/>
          <Typist.Delay ms={1000} />
          All typos are my own.
          {' '}

        </Typist>
      </div>

    </div>
  )
}

export default Bio
