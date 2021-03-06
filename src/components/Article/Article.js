import React, { Component, PropTypes } from 'react';

import './article.scss';

import {
  TimelineMax,
} from 'gsap';



export default class Article extends Component {

  static propTypes = {
    action: PropTypes.func,
    article: PropTypes.object,
    author: PropTypes.object,
    readTime: PropTypes.string,
    subTitle: PropTypes.string,
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
      id: "001aaa",
      authorId: "5303d74c64f66366f00cb9b2a94f3251bf5",
      title: "See My Setup",
      subTitle: 'Overwhelmed by all of the options?! You are not alone.',
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
    readTime: '10min',
  }

  // componentDidMount() {}

  onMouseOver = () => this.animate('in');
  onMouseOut  = () => this.animate('out');

  animate(dir) {
    const preview = this.refs.articlePreview;
    const timeMax = new TimelineMax({repeat: 0});
    const yNum = dir === 'out'
               ? '0'
               : '-1';
    const opNum = dir === 'out'
               ? 0.9
               : 1;

    timeMax.to(preview, .25, {y:yNum, opacity:opNum});
  }

  handleClick = () => {
    this.props.action(this.props.article.id);
  }

  render() {

    const {
      id,
      title,
      url,
      content,
      // canonicalUrl,
      publishedAt,
      subTitle,

    } = this.props.article;

    const {
      author,
      // readTime,
    } = this.props;

    const publishDate = new Date(publishedAt).toLocaleDateString();

    return (
      <div id={id}
           onClick={this.handleClick}
           onMouseOver={this.onMouseOver}
           onMouseOut={this.onMouseOut}
           ref="articlePreview"
           className="Article">

        <section className="articleContent">
          <h3>
            <a href={url} target="_blank">{title}</a>
          </h3>
          <div className="metaData">
            <a href={author.url} target="_blank" title={`more from ${author.name}`}>{author.name}</a>
            <span>{publishDate}</span>
          </div>
          <h4>{subTitle}</h4>
          <div className="content">
            {
              id === '001aaa'
              ? <div>
                  <ul>
                    <li>Text Editor: Atom</li>
                    <li>iTerm</li>
                    <li>SASS</li>
                    <li>React</li>
                    <li>Redux</li>
                  </ul>

                </div>
              : null
            }
            {
              id === '002aaa'
              ? <div>
                  <h2>With so many options, how do you configure your setup?</h2>
                  <span>
                  In computing, a hidden folder (sometimes hidden directory) or hidden file is a folder or file which filesystem utilities do not display by default when showing a directory listing. They are commonly used for storing user preferences or preserving the state of a utility, and are frequently created implicitly by using various utilities. They are not a security mechanism because access is not restricted - usually the intent is simply not "clutter" the display of the contents of a directory listing with files the user did not directly create
                  </span>

                </div>
              : null
            }
            {
              id === '003aaa'
              ? <ol>
                  <li>Pick a location & date</li>
                  <li>Book Andrew WK to play at the party.</li>
                  <li>Create a facebook event & invite everyone.</li>
                  <li>Order your pizza.</li>
                  <li>Party Hard!</li>
                </ol>
              : null
            }
          </div>
        </section>

      </div>
    );
  }
}
