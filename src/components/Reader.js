/*eslint-disable */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import style from './Reader.module.css';

import Controls from './Controls/Controls';
import Counter from './Counter/Counter';
import Publication from './Publication/Publication';

export default class Reader extends Component {
  static propTypes = {
    items: propTypes.arrayOf(propTypes.object.isRequired).isRequired,
    location: propTypes.shape().isRequired,
    history: propTypes.shape().isRequired,
  };

  componentDidMount() {
    const { location, history } = this.props;

    if (!location.search) {
      history.replace({
        ...location.pathtime,
        search: `?item=1`,
      });
    }
  }

  handleDecrement = () => {
    const { location, history } = this.props;

    history.push({
      ...location.pathname,
      search: `item=${publicationIdx - 1}`,
    });
  };

  handleIncrement = () => {
    const { location, history } = this.props;
    history.push({
      ...location.pathname,
      search: `item=${publicationIdx + 1}`,
    });
  };

  render() {
    const { location, items } = this.props;
    const { publicationIdx } = this.state;

    return (
      <div className={style.reader}>
        <Controls
          publicationIdx={publicationIdx <= 1}
          itemsLength={items.length}
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
        <Counter publicationIdx={publicationIdx} itemsLength={items.length} />
        <Publication
          publication={items[publicationIdx]}
          publicationIdx={publicationIdx - 1}
        />
      </div>
    );
  }
}
