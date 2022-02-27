import React, { useRef, useState } from 'react';
import { dragEndHandler, dragStartHandler } from '../../../../../utils/DragHandlers';

type Props = {
  toys: {
    count: number;
    img: string;
    name: string;
    num: string;
  };
};

function ToysItem({ toys }: Props): JSX.Element {
  const ElementRef = useRef(null);
  const [count, setCount] = useState(toys.count);

  return (
    <div data-num={toys.num} className="favorites-toys__item" ref={ElementRef}>
      <div key={`${toys.name}-count`} className="favorite-toys__count">
        {count}
      </div>
      {Array(toys.count)
        .fill('')
        .map((e, i) => (
          <img
            key={`${toys.name}-img-${i + 1}`}
            className="favorites-toys__img"
            draggable="true"
            src={toys.img}
            id={`${toys.num}-${i}`}
            alt={toys.name}
            onDragStart={(event) => {
              dragStartHandler(event, `${toys.num}-${i}`);
            }}
            onDragEnd={(event) => {
              dragEndHandler(event, ElementRef.current as unknown as HTMLElement, setCount);
            }}
          />
        ))}
    </div>
  );
}

export default ToysItem;
