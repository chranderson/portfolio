import React, { Component, PropTypes } from 'react';

import './articleFeature.scss';

import {
  TimelineMax,
} from 'gsap';

export default class ArticleFeature extends Component {

  static propTypes = {
    article: PropTypes.object,
    color: PropTypes.array,
    type: PropTypes.string,
  }

  static defaultProps = {
    article: {
      author: 'C-Boi',
      title: 'Article Title',
      date: 'Nov 17',
      readTime: 10,
      subTitle: 'This is a short description for the subtitle',
    },
    color: ['#000000', '#ffffff'],
    type: ''
  }

  componentDidMount() {
    this.animate('in');
  }


  // onMouseOver = () => this.animate('in');
  // onMouseOut  = () => this.animate('out');


  animate(dir) {
    const feature = this.refs.articleFeature;
    const timeMax = new TimelineMax({repeat: 0});
    const yNum = dir === 'out'
               ? '0'
               : '-4';

    timeMax.to(feature, .25, {y:yNum});
  }


  render() {

    const {
      article,
      color,
      type
    } = this.props;
    // const bgColor = 'blue2';

    const dynamicStyles = {
      background: color[0],
      color: color[1]
    };

    const subTitleStyle = {
      alignSelf: 'flex-start',
      background: color[2],
      color: color[0],
      padding: '5px 10px',
    };

    return (
      <div onMouseOver={this.onMouseOver}
           onMouseOut={this.onMouseOut}
           className={`ArticleFeature`}
           style={dynamicStyles}>
        <h1 ref="articleFeature">Latest {type} Article</h1>
        <subTitle style={subTitleStyle}>
          { article.subTitle }
        </subTitle>
      </div>
    );
  }
}
