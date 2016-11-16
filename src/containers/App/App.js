import React, {Component} from 'react';
import {
  Header
} from '../../components';
import {
  Home
} from '../../containers';

//styles
import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={'C-Boi'} />
        <Home />
      </div>
    )
  }
}
