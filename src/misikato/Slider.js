import React, {Component} from "react";
import PropTypes from 'prop-types';
import './css/slider.css';

class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
    this.previousClicked = this.previousClicked.bind(this);
    this.nextClicked = this.nextClicked.bind(this);
    this.timer = window.setInterval(this.nextClicked, 5000);
  }

  previousClicked() {
    console.log("Prevous is clicked!");
    this.setState((prevState)=>{
      return {currentIndex: --prevState.currentIndex}
    });
  }
  
  nextClicked() {
    console.log("Next is clicked!");
    this.setState((prevState)=>{
      return {currentIndex: ++prevState.currentIndex}
    });
  }

  getFirstChildOfType(children, type) {
    let firstChild;
    React.Children.forEach(children, (child)=> {
      const childType = child && child.type && (child.type.displayName || child.type.name);
      if(childType === (type.displayName || type.name)) firstChild = child;
    })
    return firstChild;
  }

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="slider">
        <div className="slider-img-container">
          <div className="slider-imgs" style={{ top: (Math.abs(currentIndex%images.length)*-100)+'%' }}>
            {
              images.map(img=><img src={img} key={img} alt="img1"/>)
            }
          </div>
        </div>
        <div className="slider-controller slider-previous" onClick={this.previousClicked}><span>&lt;</span></div>
        <div className="slider-controller slider-next" onClick={this.nextClicked}><span>&gt;</span></div>
      </div>
    )

  }
}

Slider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Slider;