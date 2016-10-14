import { connect } from 'react-redux';
import Navigation from '../components/navigationComponent';

const mapStateToProps = function (state) {
  return {
    data: state.navigation.data,
    isFailed: state.navigation.isFailed,
    isFetching: state.navigation.isFetching
  }
};

const navigationContainer = connect(
  mapStateToProps
)(Navigation);

export default navigationContainer;