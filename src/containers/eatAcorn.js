import { connect } from 'react-redux';
import { ateAcorn } from '../actions';
import Button from './button';

const mapStateToProps = (state) => {
  return {
    value: 'Eat one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    change: () => {
      dispatch(ateAcorn(1))
    }
  };
};

const EatAcorn = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

//exports to app
export default EatAcorn;