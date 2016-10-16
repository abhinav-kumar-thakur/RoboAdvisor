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
        <ul>
          { data.map((list, index) =>
            <li key={index}>
              <span>{list.name}</span>

              <ul> {list.stocks.map((item, index) =>

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