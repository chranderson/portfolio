import React, { Component, PropTypes } from 'react';

import './tab.scss';

export default class Tab extends Component {

  static propTypes = {
    handleClick: PropTypes.func,
    selected: PropTypes.bool,
    tabName: PropTypes.string
  }

  static defaultProps = {
    selected: false,
    tabName: 'tab'
  }

  handleClick = () => {
    this.props.handleClick(this.props.tabName);
  }

  render() {

    const {
      selected,
      tabName
    } = this.props;

    let tabStyle = 'Tab';
    tabStyle += selected
              ? ' active'
              : '';
    return (
      <div className={tabStyle} onClick={this.handleClick}>
        {tabName}
      </div>
    );
  }
}
