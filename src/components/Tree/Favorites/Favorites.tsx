import React from 'react';

import Toys from './Toys/Toys';

import State from '../../../types/State';

import './_Favorites.scss';

function Favorites({ toys }: { toys: State<string[]> }): JSX.Element {
  return (
    <div className="page-tree__aside page-tree__item page-tree__favorites">
      <Toys toys={toys} />
    </div>
  );
}

export default Favorites;
