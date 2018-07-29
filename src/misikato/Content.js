import React, {Component} from "react";
import AppBar from "./AppBar";

const TITLE = ()=>(
  <h1 className="content-title">
    Make <em>design</em> a part of <em>life</em>
  </h1>
);

const BODY = ()=>(
  <p className="content-body">
    The beauty of life comes from design but also comes from the love of beautiful things from your heart
  </p>
);

const FOOTER = ()=>(
  <div className="content-footer">
    <i className="fas fa-vial"></i>
    <span>by <a href="https://dribbble.com/shots/4869749">Misikato</a></span>
  </div>
);

export default class Content extends Component {

  render() {
    return (
      <div className="content">
        <AppBar/>
        <TITLE/>
        <BODY/>
        <FOOTER/>
      </div>
    )
  }
}