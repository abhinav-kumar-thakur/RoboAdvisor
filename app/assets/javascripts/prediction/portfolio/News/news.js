import React from 'react';

import ApiContainer from '../../../common/components/ApiContainer';
import Pi from '../../../common/components/Pi';

const News = ({ news }) => {

  let element,
    data = news.data;

  if (data) {
    element = <ul>
      {
        data.map((news, index) => {
          return <li key={index} className="news flex-row">
            <div className="flex-row__item">
              <h3 className="news__title">{news.title}</h3>
              <p className="news__description">{news.desc}</p>
            </div>
            <div className="flex-row__item">
              <Pi {...{value: news.impact}} />
            </div>
          </li>
        })
      }
    </ul>
  }

  return <ApiContainer {...{
    isFetching: news.isFetching,
    isFailed: news.isFailed,
    element: element
  }}></ApiContainer>
};

export default News;