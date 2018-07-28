import React, { Component } from "react";
import PropTypes from 'prop-types';

class SliderPreviousController extends Component {

  render() {

    const {children, onClick} = this.props;

    let child = React.cloneElement(children, { onClick: onClick });

    return child;
  }
}

SliderPreviousController.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default SliderPreviousController;