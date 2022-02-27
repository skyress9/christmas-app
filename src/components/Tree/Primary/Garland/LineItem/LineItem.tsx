import React from 'react';
import State from '../../../../../types/State';

function LineItem(count: number, garland: State<string>): JSX.Element[] {
  return Array(count)
    .fill('')
    .map((e, i, row) => {
      const middle = Math.floor(row.length / 2);
      let transform;
      if (i > middle) {
        transform = `translateY(-${10 + i * 5}px)`;
      } else if (i < middle) {
        transform = `translateY(-${10 + (row.length - 1 - i) * 5}px)`;
      } else {
        transform = `translateY(-${10 + i * 5}px)`;
      }

      return (
        <li
          className={garland.value}
          key={`lineItems${i + 1}`}
          style={{
            animationDuration: `${Math.random() + 0.5}s`,
            transform,
          }}
        />
      );
    });
}

export default LineItem;
