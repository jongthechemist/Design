import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Misikato from "./misikato/Misikato";

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/misikato" component={Misikato} />
    </div>
  </Router>
);

export default AppRouter;