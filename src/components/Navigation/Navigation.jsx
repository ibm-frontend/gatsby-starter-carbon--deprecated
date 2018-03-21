import React, { Component } from "react";

import Header from '../Header/Header';
import LeftNav from '../LeftNav/LeftNav';

import "./Navigation.scss";

class Navigation extends Component {
  render() {
    const { children, config } = this.props;
    return (
      <div className="main-container">
        <Header config={config} />
        <div className="main-content">
          <LeftNav />
          {children}
        </div>
      </div> 
    );
  }
}

export default Navigation;
