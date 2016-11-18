import React, { Component, PropTypes } from 'react';

import {
  Tab
} from '../../components';


import './menuBar.scss';

export default class MenuBar extends Component {

  static propTypes = {
    echo: PropTypes.func,
    options: PropTypes.array
  }

  static defaultProps = {
    options: [
      { name: 'random' },
      { name: 'react' },
      { name: 'redux' },
      { name: 'style' },
      { name: 'view code', link: 'https://github.com/chranderson/portfolio' },
    ],
  }

  constructor() {
    super();
    this.state = {
      selectedTab: ''
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(clickedTab: string) {
    // console.log('clickedTab: ', clickedTab);
    this.props.echo(clickedTab);
    this.setState({
      selectedTab: clickedTab
    });
  }

  renderTabs(selectedTab: string, tabs: Array<Object>) {
    return tabs.map((tab, index) => {
      return <Tab key={index}
                  selected={tab.name === selectedTab}
                  tabName={tab.name}
                  handleClick={this.handleTabClick}
                  link={tab.link} />;
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
