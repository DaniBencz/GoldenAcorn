import { connect } from 'react-redux';
import display from './display';

const mapStateToProps = (state) => {
  return {
    acorns: state.acornsReducer.acorns
  };
};

const Display = connect(
  mapStateToProps,
)(display);

//exports to app
export default Display;