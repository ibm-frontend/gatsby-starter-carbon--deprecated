import React from 'react';
import Link from 'gatsby-link';

import './Header.scss';

const Header = ({ config: { siteTitle, userLinks } }) => (
  <header className="header">
    <Link to="/" className="header__title">{siteTitle}</Link>
    <nav className="header__user-links">
      {userLinks.map(link => (
        <a href={link.url} key={link.label} target="_blank" rel="noopener">
          <i className={link.iconClassName} />
        </a>
      ))}
    </nav>
  </header>
);

export default Header;
