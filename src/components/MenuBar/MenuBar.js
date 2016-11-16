import React, { Component, PropTypes } from 'react';

import {
  Tab
} from '../../components';


import './menuBar.scss';

export default class MenuBar extends Component {

  static propTypes = {
    options: PropTypes.array
  }

  static defaultProps = {
    options: ['latest', 'random', 'react', 'redux', 'style']
  }

  constructor() {
    super();
    this.state = {
      selectedTab: ''
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(clickedTab: string) {
    this.setState({
      selectedTab: clickedTab
    });
  }

  renderTabs(selectedTab: string, tabs: Array<string>) {
    return tabs.map((tab, index) => {
      return <Tab key={index} selected={tab === selectedTab} tabName={tab} handleClick={this.handleTabClick} />;
    });

  }

  render() {

    const {
      options
    } = this.props;

    const {
      selectedTab
    } = this.state;

    return (
      <div className="MenuBar">
        <div className="tabWrap">
          {this.renderTabs(selectedTab, options)}
        </div>
      </div>
    );
  }
}
