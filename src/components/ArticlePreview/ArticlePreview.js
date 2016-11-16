import React, { Component, PropTypes } from 'react';

import './articlePreview.scss';

import {
  TimelineMax,
} from 'gsap';

export default class ArticlePreview extends Component {

  static propTypes = {
    article: PropTypes.object,
  }

  static defaultProps = {
    article: {
      author: 'C-Boi',
      title: 'Article Title',
      date: 'Nov 17',
      readTime: 10,
      subTitle: 'This is a short description for the subtitle',
    }
  }

  componentDidMount() {
    const preview = this.refs.preview;

    const timeMax = new TimelineMax({repeat: 0});
    timeMax.to(preview, .25, {y:"-10"});
  }

  render() {

    const {
      article
    } = this.props;

    return (
      <div ref="preview" className="ArticlePreview">
        <div className="metaData">
          <span>{article.author}</span>
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>
        <section className="articleContent">
          <h3>{article.title}</h3>
          <h4>{article.subTitle}</h4>
        </section>
        <div className="readMore">
          <div className="readMoreLink">Read more...</div>
        </div>
      </div>
    );
  }
}
