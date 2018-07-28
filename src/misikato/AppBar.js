import React, {Component} from "react";
import './css/navbar.css';

const MENU_ITEMS = [ "store", "popular", "contact", "about" ];

export default class AppBar extends Component {

  render() {
    return (
      <ul className="navbar">
        {
          MENU_ITEMS.map(item=><li key={item}>{item}</li>)
        }
      </ul>
    )
  }
}