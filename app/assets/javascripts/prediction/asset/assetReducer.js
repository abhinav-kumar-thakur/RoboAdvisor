import { combineReducers } from 'redux'

import personalHolding from './personalHolding/PersonalHoldingReducer';

const asset = combineReducers({
  personalHolding
});

export default asset;