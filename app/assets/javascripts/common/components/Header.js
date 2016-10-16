import React from 'react';
import ListItem from './ListItem';

const Header = () => (

  <header className="header">
    <div className="header__nav-icon">
      <img src="static/images/menu-icon.png"/>
    </div>
    <nav className="header__nav">
      <ul className="header__list">

        {['Performance', 'Predictions'].map((item, index) =>

          <ListItem
            key={index}
            {...{item}}
            onClick={() => console.log(item)}
          />
        )}

      </ul>
    </nav>
  </header>

);

export default Header;