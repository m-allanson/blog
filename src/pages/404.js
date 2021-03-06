import React from 'react';
import get from 'lodash/get';
import Helmet from 'react-helmet';
import {css} from 'emotion';

const h1Style = css`
  border-right: 1px solid #333;
  font-weight: normal;
`;

const linkStyle = css`
  font-size: 0.8em;
  text-decoration: none;
  color: #4467A8;
`;

class NotFound extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <div className="flex flex-center minvh-100">
        <Helmet title={`Page Not Found | ${siteTitle}`}/>
        <h1 className={`mr-3 pr-3 py-2 ${h1Style}`}>404</h1>
        <div>
          <p className="mb-1">Uh, this page does not seem to exist.</p>
          <p>
            <a className={linkStyle} href="/">
              Go Home
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default NotFound;

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
