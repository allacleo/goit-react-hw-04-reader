/*eslint-disable */
import React from 'react';
import propTypes from 'prop-types';
import style from '../Reader/Reader.module.css';

const Counter = ({ publicationIdx, itemsLength }) => (
  <p className={style.counter}>
    {publicationIdx}/{itemsLength}
  </p>
);

Counter.propTypes = {
  publicationIdx: propTypes.number.isRequired,
  itemsLength: propTypes.number.isRequired,
};

export default Counter;
