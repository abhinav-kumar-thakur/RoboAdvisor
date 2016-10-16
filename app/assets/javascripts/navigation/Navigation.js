import React from 'react';
import ListItem from '../common/components/ListItem';
import {Accordion, Panel} from 'react-bootstrap/lib';

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
          <Accordion>
            { data.map((list, index) =>

              <Panel key={index}
                     header={[React.createElement('span', {key: index}, list.name),
                              React.createElement('i', {key: index + '.' + index, className: 'fa fa-angle-down pull-right'}, null)]}
                     eventKey={index}>

                <ul className="nav__sub-list">
                  {list.stocks.map((item, index) =>

                    <ListItem
                      key={index}
                      {...{item}}
                      onClick={() => console.log(item)}
                    />
                  )}
                </ul>
              </Panel>
            )}
          </Accordion>
        </ul>
      </nav>
    )
  }
};

export default Navigation;