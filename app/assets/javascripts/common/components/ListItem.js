import React from 'react';

const ListItem = ({item, onClick}) => (

  <li className="list__item">
    <a href="#" className="list__link" onClick={e => {
      e.preventDefault();
      onClick();
    }}
    >
      {item}
    </a>
  </li>

);

export default ListItem;