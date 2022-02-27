import React from 'react';
import handleClick from '../../../../../utils/handleClick';

type Props = {
  color: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };

  title: string;
};

function ColorButton({ color, title }: Props): JSX.Element {
  return (
    <button
      type="button"
      aria-label="button"
      className={color.value.includes(title) ? 'toys-color__item active' : 'toys-color__item'}
      onClick={() => {
        handleClick(title, color);
      }}
    />
  );
}

export default ColorButton;
