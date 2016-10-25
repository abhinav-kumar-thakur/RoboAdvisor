import { impactingAssetsConstants } from './ImpactingAssetsConstants';

const impactingAssets = (state = {}, action) => {

  switch (action.type) {

    case impactingAssetsConstants.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isFailed: false
      });

    case impactingAssetsConstants.RECEIVE:
      return Object.assign({}, state, {
        data: action.data,
        isFetching: false,
        isFailed: false
      });

    case impactingAssetsConstants.FAILURE:
      return Object.assign({}, state, {
        isFailed: true,
        isFetching: false
      });

    default:
      return state
  }
};

export default impactingAssets;