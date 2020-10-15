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
    <Card id="container" style={{
      marginBottom: `3em`,
      borderRadius: `8px`,
      borderStyle: `solid`,
      border: `1px`,
      padding: `5px`
    }}>
      
      <Container fluid >
        <Row>
          <Col>
            <Card.Body style={{ marginTop: `0px` }}>
              <Card.Title >
                <Link style={{ fontSize: `1.50em` }} to={hit.fields.slug}>
                    {hit.frontmatter.title}
                  <Highlight hit={hit} attribute="title" tagName="mark" /> {' '}
                </Link>
              </Card.Title>

              <hr style={{margin: `0`,}}/>

              <Card.Text>
                {hit.frontmatter.description}
              </Card.Text>
              <Card.Text>
                <small className="text-muted">
                  {new Date(hit.frontmatter.date).toLocaleDateString()}
                </small>{' '}
              </Card.Text>
            </Card.Body>
          </Col>

          <Col sm={4}>
            <Card.Img src={hero} style={{
              borderRadius: `8px; 8px; 0px; 0px;`,
              margin: `0px`
            }} />
          </Col>
        </Row>
      </Container>
    </Card>  
  )
}

export default PostPreview;