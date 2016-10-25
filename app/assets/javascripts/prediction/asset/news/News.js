import React from 'react';

import ApiContainer from '../../../common/components/ApiContainer';
import Pi from '../../../common/components/Pi';

const News = ({news}) => {

  let element,
    data = news.data;

  if (data) {
    let piType = (value) => {
      return Number.parseInt(value) > 0 ? 'up' : 'down';
    };

    element = <ul>
      {
        data.map((news, index) => {
          return <li key={index} className="news flex-row">
            <div className="flex-row__item">
              <h3 className="news__title">{news.title}</h3>
              <p className="news__description">{news.desc}</p>
            </div>
            <div className="flex-row__item">
              <span className="asset-value">{news.impact}%</span>
              <Pi {...{piType: piType(news.impact)}} />
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