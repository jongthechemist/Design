import React, { Component } from 'react';
import Content from "./Content";
import Sidebar from "./Sidebar";
import './css/misikato.css';

export default class Misikato extends Component {

  render() {
    return (
      <div className="misikato body">
        <div className="wrapper">
          <Content/>
          <Sidebar/>
        </div>
      </div>
    )
  }
}