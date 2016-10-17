import React from 'react';
import ListItem from '../common/components/ListItem';
import Panel from 'react-bootstrap/lib/Panel';
import Accordion from 'react-bootstrap/lib/Accordion';
import ApiContainer from '../common/components/ApiContainer';

const Navigation = ({ navigation }) => {
  let element;

  if (navigation.data) {
    element = <ul className='nav__list'>
      <Accordion>
        { navigation.data.map((list, index) =>

          <Panel key={index}
                 header={[React.createElement('span', {key: index}, list.name),
                              React.createElement('i', {key: index + '.' + index, className: 'fa fa-angle-down pull-right'}, null)]}
                 eventKey={index}>

            <ul className='nav__sub-list'>
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
  }

  return ( <nav className='nav'>
      <ApiContainer {...{
        isFetching: navigation.isFetching,
        isFailed: navigation.isFailed,
        element: element
      }}></ApiContainer>
    </nav>
  )
};

export default Navigation;