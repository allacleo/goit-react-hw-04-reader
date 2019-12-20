import React, { Component } from 'react';
import propTypes from 'prop-types';
import style from '../../components/Reader/Reader.module.css';
import queryString from 'query-string';

import Controls from '../../components/Controls/Controls';
import Counter from '../../components/Controls/Controls';
import Publication from '../../components/Publication/Publication';


const getItemParams = props => Number(queryString.parse(props).item);

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
    const publicationIdx = getItemParams(location.search);

    history.push({
      ...location.pathname,
      search: `item=${publicationIdx - 1}`,
    });
  };

  handleIncrement = () => {
    const { location, history } = this.props;
    const publicationIdx = getItemParams(location.search);

    history.push({
      ...location.pathname,
      search: `item=${publicationIdx + 1}`,
    });
  };

  render() {
    const { location, items } = this.props;
    const publicationIdx = getItemParams(location.search);

    return (
      <div className={style.reader}>
        {location.search && (
          <>
            <Controls
              publicationIdx={publicationIdx <= 1}
              itemsLength={publicationIdx >= items.length}
              onDecrement={this.handleDecrement}
              onIncrement={this.handleIncrement}
            />
            {/* <Counter
              publicationIdx={publicationIdx}
              itemsLength={items.length}
            /> */}

            <Publication publication={items[publicationIdx - 1]} />
          </>
        )}
      </div>
    );
  }
}
