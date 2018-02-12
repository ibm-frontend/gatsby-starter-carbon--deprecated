import React, { Component } from "react";
import { Button } from 'carbon-components-react';
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const url = config.siteRss;
    const { userLinks } = this.props;
    const copyright = config.copyright;
    const fixedFooter = config.fixedFooter;
    if (!copyright) {
      return null;
    }
    return (
      <footer className={fixedFooter ? "footer footer-fixed" : "footer"}>
        {userLinks ? <UserLinks config={config} labeled /> : null}
        <div className="notice-container">
          <div className="copyright">
            <h4>
              {copyright}
            </h4>
          </div>

          <div className="rss">
            <Link to={url}>
              <Button type="link">
                Subscribe
              </Button>
            </Link>
          </div>
          <div className="based-on">
            <h4>
              Based on{" "}
              <a href="https://github.com/ibm-frontend/gatsby-starter-carbon/">
                Gatsby Carbon Starter
              </a>.
            </h4>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
