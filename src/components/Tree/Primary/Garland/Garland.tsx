import React from 'react';
import LineItem from './LineItem/LineItem';

import './_Garland.scss';
import State from '../../../../types/State';

function Garland({ garland }: { garland: State<string> }): JSX.Element {
  const garlandLines = Array(16)
    .fill('')
    .map((e, i) => (
      <ul
        key={`garland-${i + 1}`}
        className="garland-line"
        style={{
          top: `${i * 40}px`,
        }}
      >
        {LineItem(i + 3, garland)}
      </ul>
    ));

  return <div className="garland">{garlandLines}</div>;
}

export default Garland;
