import React, { Component, PropTypes } from 'react';

import { connect } from 'react-redux';
import * as blogActionCreators from '../../redux/reducers/Blog/blog-reducer';
import {
  // Button,
  Article,
  ArticlePreview,
  Cover,
  MenuBar
} from '../../components';

import {
  // Aside
} from '../../containers';

import './home.scss';

@connect(
  state => ({
    authors: state.blog.authors,
    featureId: state.blog.featureId,
    posts: state.blog.posts,
    time: state.home.currentTime,
  }),
)

export default class Home extends Component {

  static propTypes = {
    authors: PropTypes.array,
    featureId: PropTypes.string,
    posts: PropTypes.array,
    time: PropTypes.string,
  }

  // static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
    };
    this.getAuthor = this.getAuthor.bind(this);
    this.handleEcho = this.handleEcho.bind(this);
    this.updateFeature = this.updateFeature.bind(this);
  }

  handleEcho(echo) {
    console.log('echo: ', echo);

    if (typeof echo === 'string') {
      const menuItems = ['Home', 'Redux', 'React'];
      let newSelection;
      if (echo !== 'Home' || echo !== 'Redux' || echo !== 'React') {
        newSelection = null;
      } else {
        newSelection = echo;
      }
      this.setState({
        selectedId: newSelection
      })
    }
  }

  // goHome = () => {
  //   this.setState({
  //     title: 'ca'
  //   });
  // }

  getAuthor(authorId) {
    return this.props.authors.filter(author => author.id === authorId)[0];
  }

  renderArticle() {
    const { posts } = this.props;
    const { selectedId } = this.state;
    const selectedPost = posts.filter(post => post.id === selectedId)[0];
    console.log('selectedPost: ', selectedPost);
    return <Article article={selectedPost} />;
  }

  renderArticlePreviews() {
    const { posts } = this.props;
    return posts.map((post, index) => <ArticlePreview key={index} article={post} action={this.updateFeature} author={this.getAuthor(post.authorId)} />);
  }

  updateFeature(id) {
    console.log('id: ', id);
    this.setState({
      selectedId:  id
    });

    let { dispatch } = this.props;
    dispatch(blogActionCreators.updateFeature(id))
  }

  render() {

    const {
      featureId,
      posts,
      time
    } = this.props;

    const {
      selectedId,
      title
    } = this.state;

    // console.log(featureId);
    const featArticle = posts.length ? posts.filter(post => post.id === featureId)[0] : undefined;
    // console.log('posts.length: ', posts.length);
    // console.log('featArticle: ', featArticle);
    const author = featArticle ? this.getAuthor(featArticle.authorId) : undefined;
    console.log('selectedId: ', selectedId);
    return (
      <div className="Home">

        <Cover article={featArticle} author={author} title={title} time={time} onEcho={this.handleEcho} />

        <MenuBar echo={this.handleEcho} />

        <div className="contentWrap">
          <section className="main">
            {
              selectedId !== null
              ? this.renderArticle()
              : this.renderArticlePreviews()
            }
          </section>

        </div>

      </div>
    );
  }
}
