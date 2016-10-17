import { connect } from 'react-redux';
import Navigation from './Navigation';

const mapStateToProps = function (state) {
  return {
    navigation: state.navigation
  }
};

const NavigationContainer = connect(
  mapStateToProps
)(Navigation);

export default NavigationContainer;