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

  render() {
    const styles = require('./cover.css');
    const {
      // time,
      title
    } = this.props;

    return (
      <div className={styles.Cover}>

        {
          title === 'ca'
          ? <h1>{ title }</h1>
          : <ArticleFeature type={title} />
        }

      </div>
    );
  }
}
