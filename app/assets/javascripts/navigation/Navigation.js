import React from 'react';

const Navigation = ({ data, isFetching, isFailed }) => {

  if (isFetching) {
    return <h1>fetching navigation data</h1>
  }

  else if (isFailed) {
    return <h1>data loading failed</h1>
  }
  else {
    return <h1>{data.map(d => {
        return <p>{d.name}</p>
      }
    )}</h1>
  }
};

export default Navigation;