import React from 'react';
import propTypes from 'prop-types';

import style from '../Reader/Reader.module.css';

const Controls = ({
  onDecrement,
  onIncrement,
  publicationIdx,
  itemsLength,
}) => (
  <section className={style.controls}>
    <button
      type="button"
      className={style.button}
      onClick={onDecrement}
      disabled={publicationIdx}
    >
      Назад
    </button>
    <button
      type="button"
      className={style.button}
      onClick={onIncrement}
      disabled={itemsLength}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onDecrement: propTypes.func.isRequired,
  onIncrement: propTypes.func.isRequired,
  publicationIdx: propTypes.bool.isRequired,
  itemsLength: propTypes.bool.isRequired,
};

export default Controls;
