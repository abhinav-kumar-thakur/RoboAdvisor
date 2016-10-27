import React from 'react';

import ApiContainer from '../../common/components/ApiContainer';
import Pi from '../../common/components/Pi';

const News = ({news}) => {

  let element,
    data = news.data;

  if (data) {
    let piType = (impact) => {
      return impact === 'Positive' ? 'up' : 'down';
    };

    element = <ul>
      {
        data.map((news, index) => {
          return <li key={index} className="news flex-row">
            <div className="flex-row__item">
              <a className="list__link" href={news.url}><h3 className="news__title">{news.headline}</h3></a>
            </div>
            <div className="flex-row__item">
              <span className="asset-value">{news.sentiment}%</span>
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