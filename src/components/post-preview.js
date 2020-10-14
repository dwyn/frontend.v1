import React from "react";
import { Link } from "gatsby";
import { rhythm } from "../utils/typography"
import { Highlight } from "react-instantsearch-dom"
// import CustomHighlight from "./custom-highlight"





// React Bootstrap
import { Card, Row, Container, Col } from 'react-bootstrap';

// just for testing purposes
// remove asap
import hero from '../assets/hero-placehoder.png';

const PostPreview = ({ hit }) => {
  // let exceptSnippet = <section> <Highlight hit={hit} attribute="excerpt" tagName="mark" /> </section>
  return (
    
    // <article style={{
    //   height: '4em', // Need to figure out a better solution here
    //   marginBottom: rhythm(3/4),
    //   display: 'flex'
    // }}>
    <Card style={{
      marginBottom: `3em`,
      borderRadius: `8px`,
      borderStyle: `solid`,
      border: `1px`,
      padding: `5px`

    }}>
      
      <Container fluid >
        <Row>
      
                      {/* <Card.Img  src={hero} style={{
                        borderRadius: `8px; 8px; 0px; 0px;`,
                        margin: `0px`
                      }} /> */}
          <Col sm={4}>
            {new Date(hit.frontmatter.date).toLocaleDateString()}
            {/* <small className="text-muted"> 
            </small>{' '} */}
          </Col>

          <Col>
            <Card.Body style={{ marginTop: `0px` }}>
              <Card.Title >
                <Link style={{ fontSize: `1.75em` }} to={hit.fields.slug}>
                    {hit.frontmatter.title}
                  <Highlight hit={hit} attribute="title" tagName="mark" /> {' '}
                  
                </Link>
                
              </Card.Title>

              <hr style={{margin: `0`,}}/>

              <Card.Text>
                {hit.frontmatter.description}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>  
  )
}

export default PostPreview;