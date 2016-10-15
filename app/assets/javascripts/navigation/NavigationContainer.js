import { connect } from 'react-redux';
import Navigation from './Navigation';

const mapStateToProps = function (state) {
  return {
    data: state.navigation.data,
    isFailed: state.navigation.isFailed,
    isFetching: state.navigation.isFetching
  }
};

const NavigationContainer = connect(
  mapStateToProps
)(Navigation);

export default NavigationContainer;