import React, { Component } from "react";

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LeftNav from '../LeftNav/LeftNav';

import "./Navigation.scss";

class Navigation extends Component {
  render() {
    const { children, config, LocalTitle } = this.props;
    const footerLinks = LocalTitle !== "About";

    return (
      <div className="main-container">
        <Header config={config} />
        <div className="main-content">
          <LeftNav />
          {children}
          <Footer userLinks={footerLinks} />
        </div>
      </div> 
    );
  }
}

export default Navigation;
