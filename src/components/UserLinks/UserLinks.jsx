import React from "react";
import { Link } from "carbon-components-react";
import "./UserLinks.scss";

const UserLinks = (props) => {
  const { labeled } = props;
  const { userLinks } = props.config;
  if (!userLinks) {
    return null;
  }
  return (
    <div className="user-links">
      {userLinks.map(link =>
        (<Link href={link.url} className="user-links__link">
          <i className={link.iconClassName} /> {labeled ? link.label : ""}
        </Link>)
      )}
    </div>
  );
}

export default UserLinks;
