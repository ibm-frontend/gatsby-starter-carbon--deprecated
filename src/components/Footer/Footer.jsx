import React, { Component } from "react";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const { userLinks } = this.props;
    const copyright = config.copyright;
    const fixedFooter = config.fixedFooter;
    if (!copyright) {
      return null;
    }
    return (
      <footer className={fixedFooter ? "footer footer--fixed" : "footer"}>
        <div className="footer__container">
          <div className="footer__left">
            {copyright}
          </div>
          <div className="footer__right">
            Based on{" "}
            <a href="https://github.com/ibm-frontend/gatsby-starter-carbon">
              Gatsby Carbon Starter
            </a>.
            {userLinks ? <UserLinks config={config} labeled /> : null}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
