import React from 'react';
import ListItem from '../common/components/ListItem';

const Navigation = ({ data, isFetching, isFailed }) => {

  if (isFetching) {
    return <h1>fetching navigation data</h1>
  }

  else if (isFailed) {
    return <h1>data loading failed</h1>
  }

  else {
    return (
      <nav className="nav">
        <ul className="nav__list">
          { data.map((list, index) =>
            <li className="list__item" key={index}>
              <a className="list__link" href="#">
                <span>{list.name}</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>

              <ul className="nav__sub-list"> {list.stocks.map((item, index) =>

                <ListItem
                  key={index}
                  {...{item}}
                  onClick={() => console.log(item)}
                />
              )}
              </ul>
            </li>
          )}
        </ul>
      </nav>
    )
  }
};

export default Navigation;