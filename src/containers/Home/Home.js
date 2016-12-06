import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  // Button,
  ArticlePreview,
  Cover,
  MenuBar
} from '../../components';

import {
  Aside
} from '../../containers';

import './home.scss';

@connect(
  state => ({
    time: state.home.currentTime,
  }),
)

export default class Home extends Component {

  static propTypes = {
    message: PropTypes.string,
    time: PropTypes.string,
  }

  static defaultProps = {
    message: 'Home page',
  }

  constructor(props) {
    super(props);
    this.state = {
      title: 'ca',
    };
    this.handleEcho = this.handleEcho.bind(this);
  }

  handleEcho(echo) {
    console.log('echo: ', echo);
    this.setState({
      title: echo
    })
  }

  goHome = () => {
    this.setState({
      title: 'ca'
    });
  }

  render() {

    const {
      time
    } = this.props;

    const {
      title
    } = this.state;


    // const prevSectionStyle = {
    //   maxWidth: '600px',
    //   margin: '2em auto',
    // };

    return (
      <div className="Home">
        <Cover title={title} time={time} />
        <MenuBar echo={this.handleEcho} />
        <div className="contentWrap">
          <section className="main" onClick={this.goHome}>
            <ArticlePreview />
            <ArticlePreview />
            <ArticlePreview />
          </section>
          <Aside />
        </div>
      </div>
    );
  }
}
