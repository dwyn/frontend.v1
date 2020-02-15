import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import './typist.css';

import { rhythm } from "../utils/typography";
import Typist from 'react-typist';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
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

  // const { author, social } = data.site.siteMetadata
  const { author } = data.site.siteMetadata
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

      <div style={{
        fontSize: '15pt',
        fontFamily: 'BentonSans Light',
        lineHeight: 'normal'
    }}>
        <Typist
          avgTypingDelay={50} 
          startDelay={100}
          stdTypingDelay={33}
          cursor={{
            show: true,
            blink: true,
            element: '▍',
          }}

        >
          Musings. &nbsp;<Typist.Delay ms={400} />
          Music. &nbsp;<Typist.Delay ms={400} />
          Modern-Day Hieroglyphs.<Typist.Delay ms={600} /> <br />
          
          Written by <strong>{author}</strong>
          <Typist.Backspace count={19} delay={1400} />
          All typos are my own.
          {' '}

        </Typist>
      </div>

    </div>
  )
}

export default Bio;