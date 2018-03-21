import React from 'react';
import Link from 'gatsby-link';
import { InteriorLeftNav, InteriorLeftNavItem } from 'carbon-components-react';

import './LeftNav.scss';

const LeftNav = () => (
  <InteriorLeftNav>
    <InteriorLeftNavItem>
      <Link to="/">Home</Link>
    </InteriorLeftNavItem>

    <InteriorLeftNavItem>
      <Link to="/about">About</Link>
    </InteriorLeftNavItem>
  </InteriorLeftNav>
);

export default LeftNav;
