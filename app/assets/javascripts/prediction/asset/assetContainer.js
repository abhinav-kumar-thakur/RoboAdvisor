import { connect } from 'react-redux';
import Portfolio from './Asset';

const mapStateToProps = function (state) {
  return {
    asset: state.prediction.asset
  }
};

const PortfolioContainer = connect(
  mapStateToProps
)(Portfolio);

export default PortfolioContainer;