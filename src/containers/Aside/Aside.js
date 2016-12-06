import React, {
  Component,
  // PropTypes
} from 'react';
// import { connect } from 'react-redux';

// import {
  // Button,
  // ArticlePreview,
  // Cover,
  // MenuBar
// } from '../../components';

import './aside.scss';

// @connect(
//   state => ({
//     time: state.home.currentTime,
//   }),
// )

export default class Aside extends Component {

  static propTypes = {}
  static defaultProps = {}

  render() {

    const asideStyle = {
      fontSize: 14,
      letterSpacing: '0.05em',
      lineHeight: 1.5,
      padding: '1em 2em'
    };

    return (
      <section className="Aside" style={asideStyle}>
        <h4>Aside Header</h4>
        <p>Climb leg rub face on everything give attitude nap all day for under the bed...</p>

        <h4>Aside Header</h4>
        <p>Climb leg rub face on everything give attitude nap all day for under the bed...</p>

        <h4>Aside Header</h4>
        <p>Climb leg rub face on everything give attitude nap all day for under the bed...</p>

        <h4>Aside Header</h4>
        <p>Climb leg rub face on everything give attitude nap all day for under the bed...</p>
      </section>
    );
  }
}
