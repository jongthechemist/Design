import React, { Component } from "react";
import IMG1 from './img/1.jpg';
import IMG2 from './img/2.jpg';
import IMG3 from './img/3.jpg';
import Slider from "./Slider";
import SliderPreviousController from "./SliderPreviousController";
import SliderNextController from "./SliderNextController";

const IMAGES = [ IMG1, IMG2, IMG3 ];

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Slider images={IMAGES}>
          <SliderPreviousController>
            <div className="slider-controller slider-previous"><span>&lt;</span></div>
          </SliderPreviousController>
          <SliderNextController>
            <div className="slider-controller slider-next"><span>&gt;</span></div>
          </SliderNextController>
        </Slider>
      </div>
    )
  }
}