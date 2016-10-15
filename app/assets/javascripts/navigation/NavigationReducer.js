import { navigationConstants } from './NavigationConstants';

const navigation = (state = {}, action) => {

  switch (action.type) {

    case navigationConstants.REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isFailed: false
      });

    case navigationConstants.RECEIVE:
      return Object.assign({}, state, {
        data: action.data,
        isFetching: false,
        isFailed: false
      });

    case navigationConstants.FAILURE:
      return Object.assign({}, state, {
        isFailed: true,
        isFetching: false
      });


    default:
      return state
  }

};

export default navigation;