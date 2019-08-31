import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './styles/style.scss';
import Header from './Header.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header/>
        </Fragment>
      </Router>
    )
  }
}

export default App;
