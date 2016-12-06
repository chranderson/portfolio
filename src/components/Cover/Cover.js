import React, { Component, PropTypes } from 'react';
// import './cover.scss';

import {
  ArticleFeature
} from '../../components';

export default class Cover extends Component {

  static propTypes = {
    time: PropTypes.string,
    title: PropTypes.string
  }

  static defaultProps = {
    time: 'time',
    title: 'ca'
  }

  getColor(title: string) {
    let color;
    if (title === 'redux') color = ['#252233 ', '#EE6C1F', '#D0511A', '#A4060E', '#74030A'];
    if (title === 'react') color = ['#171A1F', '#FEEBB3', '#E3CA8A', '#B6906C'];
    if (title === 'style') color = ['#212121', '#F73246', '#9E8B71', '#2E58F5', '#F18C24' ];

    return color;
  }

  render() {
    const styles = require('./cover.css');
    const {
      // time,
      title
    } = this.props;


    const mainTitle = {
      color: '#FEEBB3',
      boxShadow: 'none',
      border: '2px solid #D0511A',
      padding: '0px 10px 10px 10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    };

    return (
      <div className={styles.Cover}>

        {
          title === 'ca'
          ? <h1 style={mainTitle}>{ title }</h1>
          : <ArticleFeature type={title} color={this.getColor(title)} />
        }

      </div>
    );
  }
}
