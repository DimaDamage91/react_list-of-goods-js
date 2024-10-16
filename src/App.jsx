import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const sortFieldAlphabet = 'alphabet';
const sortFieldLength = 'length';
const reverseFieldGoods = 'reverse';

export const App = () => {
  const [visibleGoods, setVisibleGoods] = useState(goodsFromServer);
  const [activeSort, setActiveSort] = useState('');
  const [originalGoods, setOriginalGoods] = useState(goodsFromServer);

  const resetGoodsOrder = () => {
    setVisibleGoods(goodsFromServer);
    setActiveSort('');
  };

  const sortAlphabetically = () => {
    setVisibleGoods(
      [...visibleGoods].sort((good1, good2) => good1.localeCompare(good2))
    );
    setActiveSort(sortFieldAlphabet);
  };

  const sortByLengthOfGoods = () => {
    setVisibleGoods(
      [...visibleGoods].sort((good1, good2) => good1.length - good2.length)
    );
    setActiveSort(sortFieldLength);
  }

  const reverseOrderOfGoods = () => {
    setVisibleGoods(
      [...visibleGoods].reverse()
    );
    setActiveSort(reverseFieldGoods)
  }

  return (
  <div className="section content">
    <div className="buttons">
      <button
        onClick={sortAlphabetically}
        type="button"
        className={`button is-info ${activeSort === sortFieldAlphabet ? '' : 'is-light'}`}
      >
        Sort alphabetically
      </button>

      <button
        onClick={sortByLengthOfGoods}
        type="button"
        className={`button is-success ${activeSort === sortFieldLength ? '' : 'is-light'}`}
      >
        Sort by length
      </button>

      <button
        onClick={reverseOrderOfGoods}
        type="button"
        className={`button is-warning ${activeSort === reverseFieldGoods ? '' : 'is-light'}`}
      >
        Reverse
      </button>
     {JSON.stringify(visibleGoods) !== JSON.stringify(originalGoods) && (
      <button
        onClick={resetGoodsOrder}
        type="button"
        className="button is-danger is-light"
      >
        Reset
      </button>
      )}
    </div>

    <ul>
      {visibleGoods.map(good => (
        <li key={good} data-cy="Good">{good}</li>
      ))}
    </ul>
  </div>
  );
};
