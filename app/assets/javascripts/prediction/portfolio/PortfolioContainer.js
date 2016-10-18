import { connect } from 'react-redux';
import Portfolio from './Portfolio';

const mapStateToProps = function (state) {
  return {
    portfolio: state.prediction.portfolio
  }
};

const PortfolioContainer = connect(
  mapStateToProps
)(Portfolio);

export default PortfolioContainer;