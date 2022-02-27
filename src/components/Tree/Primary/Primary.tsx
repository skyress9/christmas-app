import React, { useRef } from 'react';
import State from '../../../types/State';

import Tree from './Tree/Tree';
import Snowflakes from './Snowflakes/Snowflakes';
import Garland from './Garland/Garland';

import './_Primary.scss';
import Map from '../Map/Map';

type Props = {
  bg: State<string>;
  tree: State<string>;
  fall: State<boolean>;
  garland: State<string>;
};

function Primary({ bg, tree, fall, garland }: Props): JSX.Element {
  const page = useRef(null);

  return (
    <div
      ref={page}
      className="page-tree__item page-tree__primary"
      style={{
        backgroundImage: `url(${bg.value})`,
      }}
    >
      <Snowflakes fall={fall} />
      <Garland garland={garland} />
      <Tree tree={tree} />
      <Map page={page} />
    </div>
  );
}

export default Primary;
