import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          marginBottom: rhythm(1.5),
          paddingTop: rhythm(1),
          position: "absolute",
          left: "0",
          bottom: "0",
          right: "0",
          textAlign: "center"
        }}
      >
        <a
          href="https://mobile.twitter.com/dwyn"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/dwyn"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
      </footer>
    );
  }
}

export default Footer;