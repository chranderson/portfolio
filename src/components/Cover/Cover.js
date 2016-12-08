import React, { Component, PropTypes } from 'react';
// import './cover.scss';

import dotfilesImg from './dotfiles.gif';
import lightingImg from './lighting.gif';
import setupImg from './man-deletes-comp.gif';
import pizzaImg from './pizza.gif';

import {
  ArticleFeature
} from '../../components';

export default class Cover extends Component {

  static propTypes = {
    echo: PropTypes.func,
    author: PropTypes.object,
    article: PropTypes.object,
    time: PropTypes.string,
    title: PropTypes.string
  }

  static defaultProps = {
    author: {
      id: "5303d74c64f66366f00cb9b2a94f3251bf5",
      username: "@chr_s_nd_rs_n",
      name: "Chris Anderson",
      url: "https://chranderson.github.io/portfolio",
      imageUrl: "https://avatars2.githubusercontent.com/u/2660355?v=3&u=f866c21d519dcc65b0e5f5833fd12aaba9d57a6a&s=400"
    },
    article: {
      id: "",
      authorId: "",
      title: "",
      subTitle: '',
      contentFormat: "html",
      content: "<h1>Overwhelmed by all of the options?!</h1><p>You are not alone.</p>",
      url: "https://chranderson.github.io/portfolio/blog/posts/see-my-setup-001aaa",
      canonicalUrl: "http://localhost:3015/posts/see-my-setup",
      tags: ["js", "js-fatigue", "setup"],
      publishStatus: "unlisted",
      publishedAt: 1442286338435,
      license: "all-rights-reserved",
      licenseUrl: "https://chranderson.github.io/license"
    },
    time: 'time',
    title: 'ca'
  }

  getColor() {
    const colors = {
      blackOrange: ['#212121', '#F73246', '#9E8B71', '#2E58F5', '#F18C24' ],
      blueGold: ['#171A1F', '#FEEBB3', '#E3CA8A', '#B6906C'],
      orangeBlue: ['#252233 ', '#EE6C1F', '#D0511A', '#A4060E', '#74030A'],
    };

    return colors.blueGold;
  }

  handleEcho = () => {
    this.props.onEcho(this.props.article.id)
  }

  render() {
    const styles = require('./cover.css');
    const {
      article,
      author,
      // echo,
      title
    } = this.props;

    let articleImg;
    if (article.id === '001aaa') articleImg = setupImg;
    if (article.id === '002aaa') articleImg = dotfilesImg;
    if (article.id === '003aaa') articleImg = pizzaImg;
    if (article.id === '004aad') articleImg = lightingImg;
    console.log('articleImg: ', articleImg);
    // const img = process.env.PUBLIC_URL + '/man-deletes-image.gif';

    return (
      <div className={styles.Cover}>
        <ArticleFeature onEcho={this.handleEcho} article={article} image={articleImg} author={author} type={title} color={this.getColor()} />
      </div>
    );
  }
}
