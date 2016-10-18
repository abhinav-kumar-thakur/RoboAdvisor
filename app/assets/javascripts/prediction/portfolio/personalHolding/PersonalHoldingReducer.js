import { personalHoldingConstants } from './PersonalHoldingConstants';

const personalHolding = (state = {}, action) => {

  switch (action.type) {

    case personalHoldingConstants.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isFailed: false
      });

    case personalHoldingConstants.RECEIVE:
      return Object.assign({}, state, {
        data: action.data,
        isFetching: false,
        isFailed: false
      });

    case personalHoldingConstants.FAILURE:
      return Object.assign({}, state, {
        isFailed: true,
        isFetching: false
      });

    default:
      return state
  }
};

export default personalHolding;