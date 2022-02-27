import React from 'react';
import './_Size.scss';
import SizeButton from './SizeButton/SizeButton';

type Props = {
  size: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

function Size({ size }: Props): JSX.Element {
  const toySize = ['большой', 'средний', 'малый'];

  return (
    <div className="toys-item toys-size">
      <div className="toys-size__title">Размер</div>
      <div className="toys-size__items">
        {toySize.map((e) => {
          return <SizeButton size={size} title={e} key={e} />;
        })}
      </div>
    </div>
  );
}

export default Size;
