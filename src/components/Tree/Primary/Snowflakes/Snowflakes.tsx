import React from 'react';
import State from '../../../../types/State';

import './_Snowflakes.scss';

type Props = {
  fall: State<boolean>;
};

function Snowflakes({ fall }: Props): JSX.Element {
  function createSnowflakes() {
    return Array(100)
      .fill('')
      .map((e, i) => {
        const height = Math.random() * 5;
        return (
          <i
            key={`${i + 1}-snow`}
            style={{
              left: `${Math.random() * 100}%`,
              width: `${height * 4}px`,
              height,
              animationDuration: `${Math.random() * 7 + 2}s`,
              opacity: Math.random(),
            }}
          />
        );
      });
  }

  return (
    <div className="snowflakes">
      <div className="snowflakes-container">{fall.value ? createSnowflakes() : null}</div>
    </div>
  );
}

export default Snowflakes;
