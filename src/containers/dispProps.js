import { connect } from 'react-redux';
import display from './display';

//needs work!!

const mapStateToProps = () => {
  return {
    //children?
  };
};


const Display = connect(
  mapStateToProps,
)(display);

//exports to app
export default Display;