import React, { Component } from "react";
import { Tile } from "carbon-components-react";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./About.scss";

class About extends Component {
	render() {
    return (
      <Tile className="about">
        <div className="about__avatar-container">
          <img
            src={config.userAvatar}
            className="about__avatar"
            alt={config.userName}
          />
        </div>
        <div className="about__content">
          <p>Spicy jalapeno bacon ipsum dolor amet venison strip steak beef ribs, jowl turducken prosciutto drumstick porchetta buffalo doner biltong tri-tip beef corned beef. Cupim pork chop landjaeger, pork loin tenderloin pork kevin brisket doner drumstick. Landjaeger biltong buffalo shank short ribs. Jowl chicken rump pork loin ham hock, short ribs buffalo pig ball tip ham shank t-bone. Shankle strip steak swine, pancetta kevin corned beef sausage chicken pig pork loin pork t-bone turkey beef ribs.</p>
          <UserLinks labeled config={config} />
        </div>
      </Tile>
    );
  }
}

export default About;
