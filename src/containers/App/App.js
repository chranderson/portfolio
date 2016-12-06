import React, { Component } from 'react';

import {
  Link
} from '../../components';

import {
  Home
} from '../../containers';

//styles
import './app.scss';

export default class App extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   property: value
    // }
    this.handleWheel = this.handleWheel.bind(this);
  }

  handleWheel(event, synthEvent) {
    if (event.deltaY < 0) {
      console.log('event.deltaY: ', event.deltaY);
    }
  }

  render() {
    return (
      <div className="App"
          //  onWheel={this.handleWheel}
          >
        <Link id="viewCode" url={'https://github.com/chranderson/portfolio'} title={'view code'} />
        <Home />
      </div>
    )
  }
}
