import React, { Component, PropTypes } from 'react';

import './header.scss';

export default class Header extends Component {

  static propTypes = {
    title: PropTypes.string
  }

  static defaultProps = {
    title: 'title',
  }

  render() {

    const {
      title,
    } = this.props;

    return (
      <div className="Header">
        <span>{title}</span>
      </div>
    );
  }
}
