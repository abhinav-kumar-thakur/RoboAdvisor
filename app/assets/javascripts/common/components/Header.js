import React from 'react';
import ListItem from './ListItem';

const Header = () => {

  let links = [
    {name: 'Performance', routeTo: 'performance'},
    {name: 'Predictions', routeTo: 'predictions'}
  ];

  return ( <header className="header">
      <div className="header__nav-icon">
        <i className="fa fa-bars"></i>
      </div>
      <nav className="header__nav">
        <ul className="header__list">

          {links.map((link, index) =>
            <ListItem key={index} {...{link}}/>
          )}

        </ul>
      </nav>
    </header>
  )
};

export default Header;