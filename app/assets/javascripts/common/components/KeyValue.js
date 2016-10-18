import React from 'react';

const KeyValue = ({name, value}) => (

  <div className="key-value">
    <div>
      <p className="key">{name}</p>
      <p className="value">{value}</p>
    </div>
  </div>

);

export default KeyValue;