import React from 'react';
import ListItem from './ListItem';

const Header = () => (

  <header className="header">
    <div className="header__menu-icon">
      <img src="static/images/menu-icon.png"/>
    </div>
    <div className="header__list-container">
      <ul className="header__list">

        {['Performance', 'Predictions'].map((item, index) =>

          <ListItem
            key={index}
            {...{item}}
            onClick={() => console.log(item)}
          />
        )}

      </ul>
    </div>
  </header>

);

export default Header;