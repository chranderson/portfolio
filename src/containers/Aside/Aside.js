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

    return (
      <section className="Aside">
        <h4>Aside Header</h4>
        <p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.</p>
        <h4>Aside Header</h4>
        <p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.</p>
        <h4>Aside Header</h4>
        <p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.</p>
        <h4>Aside Header</h4>
        <p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.</p>
      </section>
    );
  }
}
