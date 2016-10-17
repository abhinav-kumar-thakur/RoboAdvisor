import React from 'react';
import { Link } from 'react-router';

const ListItem = ({link = {}}) => (

  <li className="list__item">
    <Link to={'/' + link.routeTo} className="list__link" activeClassName="active">
      {link.name}
    </Link>
  </li>

);

export default ListItem;