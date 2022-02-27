import React from 'react';

import getToys from '../../../../utils/getToys';
import ToysItem from './ToysItem/ToysItem';

import State from '../../../../types/State';

import './_Toys.scss';

function Toys({ toys }: { toys: State<string[]> }): JSX.Element {
  const toysData = getToys(toys.value);

  return (
    <div className="favorites-toys">
      <div className="favorites-toys__title">Игрушки</div>
      <div className="favorites-toys__items">
        {toysData.map((elem) => (
          <ToysItem key={`${elem.name}-item`} toys={elem} />
        ))}
      </div>
    </div>
  );
}

export default Toys;
