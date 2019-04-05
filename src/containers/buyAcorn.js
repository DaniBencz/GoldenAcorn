import { connect } from 'react-redux';
import { boughtAcorn } from '../actions';
import Button from './button';

const mapStateToProps = () => {
  return {
    value: 'Buy one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: () => {
      dispatch(boughtAcorn(1));
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

//exports to app
export default BuyAcorn;