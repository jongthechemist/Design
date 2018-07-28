import React, { Component } from "react";
import PropTypes from 'prop-types';

class SliderNextController extends Component {

  render() {

    const {children, onClick} = this.props;

    let child = React.cloneElement(children, { onClick: onClick });

    return child;
  }
}

SliderNextController.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default SliderNextController;