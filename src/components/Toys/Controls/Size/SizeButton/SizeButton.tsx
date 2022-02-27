import React from 'react';
import handleClick from '../../../../../utils/handleClick';

type Props = {
  size: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
  title: string;
};

function SizeButton({ size, title }: Props): JSX.Element {
  return (
    <button
      type="button"
      aria-label="button"
      className={size.value.includes(title) ? 'toys-size__item active' : 'toys-size__item'}
      onClick={() => {
        handleClick(title, size);
      }}
    />
  );
}

export default SizeButton;
