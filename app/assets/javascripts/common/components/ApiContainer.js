import React from 'react';
import Loader from './Loader';

const ApiContainer = ({isFetching, isFailed, element}) => {

  let getContent = () => {
    if (isFetching) {
      return <Loader />
    }

    else if (isFailed) {
      return <h1>data loading failed</h1>
    }

    else {
      return element;
    }
  };

  return (
    <div className={'api-container' + ((isFetching || isFailed) ? ' api-container--centered' : '')}>
      {getContent()}
    </div>
  )

};

export default ApiContainer;
