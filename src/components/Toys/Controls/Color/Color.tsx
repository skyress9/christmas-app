import React from 'react';
import './_Color.scss';
import ColorButton from './ColorButton/ColorButton';

type Props = {
  color: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

function Color({ color }: Props): JSX.Element {
  const toyColor = ['белый', 'желтый', 'красный', 'синий', 'зелёный'];

  return (
    <div className="toys-item toys-color">
      <div className="toys-color__title">Цвет</div>
      <div className="toys-color__items">
        {toyColor.map((e) => {
          return <ColorButton key={e} title={e} color={color} />;
        })}
      </div>
    </div>
  );
}

export default Color;
