import React from 'react';
import handleClick from '../../../../../utils/handleClick';

type Props = {
  form: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
  title: string;
};

function FormButton({ form, title }: Props): JSX.Element {
  return (
    <button
      type="button"
      aria-label={title}
      className={form.value.includes(title) ? 'toys-form__item active' : 'toys-form__item'}
      onClick={() => {
        handleClick(title, form);
      }}
    />
  );
}

export default FormButton;
