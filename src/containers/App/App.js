import React, {Component} from 'react';

import {
  Home
} from '../../containers';

//styles
import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    )
  }
}
