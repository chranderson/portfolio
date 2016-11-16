import React, { Component, PropTypes } from 'react';
import './cover.scss';


export default class Cover extends Component {

  static propTypes = {
    time: PropTypes.string,
    title: PropTypes.string
  }

  static defaultProps = {
    time: 'time',
    title: 'chr_s_nd_rs_n'
  }

  render() {

    const {
      time,
      title
    } = this.props;

    return (
      <div className="Cover">
        <h1>{ title }</h1>
        <p>{ time }</p>
      </div>
    );
  }
}
