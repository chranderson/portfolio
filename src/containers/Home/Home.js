import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  // Button,
  ArticlePreview,
  Cover,
  MenuBar
} from '../../components';

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

  render() {
    // const styles = require('./Away.css');
    const {
      // message,
      time
    } = this.props;


    const prevSectionStyle = {
      maxWidth: '600px',
      margin: '2em auto',
    };

    return (
      <div className="Home">
        <Cover title={'chr_s_nd_rs_n'} time={time}/>
        <MenuBar />
        <section style={prevSectionStyle}>
          <ArticlePreview />
          <ArticlePreview />
          <ArticlePreview />
          <ArticlePreview />
          <ArticlePreview />
          <ArticlePreview />
          <ArticlePreview />
          <ArticlePreview />
        </section>
      </div>
    );
  }
}
