import React, { Component, PropTypes } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Link
} from '../../components';

import {
  Home
} from '../../containers';

//styles
import './app.scss';

import * as authors from '../../static/authors';
import * as posts from '../../static/posts';

import * as blogActionCreators from '../../redux/reducers/Blog/blog-reducer';

@connect(
  state => ({
    posts: state.blog.posts,
  }),
)
export default class App extends Component {

  static propTypes = {
    posts: PropTypes.any,
  }

  constructor(props) {
    super(props);
    this.state = {
      scrollUp: false
    }
    this.handleWheel = this.handleWheel.bind(this);
  }

  componentDidMount() {
    this.loadAuthors();
    this.loadPosts();
  }

  loadPosts = () => {
    let { dispatch } = this.props;
    dispatch(blogActionCreators.loadPosts(posts))
  };

  loadAuthors = () => {
    let { dispatch } = this.props;
    dispatch(blogActionCreators.loadAuthors(authors))
  };

  handleWheel(event, synthEvent) {
    const scrollingUp = event.deltaY < 0;

    this.setState({
      scrollUp: scrollingUp,
    });
  }

  render() {

    const {
      scrollUp,
    } = this.state;

    return (
      <div className="App" onWheel={this.handleWheel}>
        {
          scrollUp
          ? <Link id="viewCode" url={'https://github.com/chranderson/portfolio'} title={'view code'} />
          : null
        }
        <Home />
      </div>
    )
  }
}
