import React from 'react';
import './_Form.scss';
import FormButton from './FormButton/FormButton';

type Props = {
  form: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

function Form({ form }: Props): JSX.Element {
  const toyName = ['шар', 'снежинка', 'фигурка', 'шишка', 'колокольчик'];

  return (
    <div className="toys-item toys-form">
      <div className="toys-form__title">Форма</div>
      <div className="toys-form__items">
        {toyName.map((e) => {
          return <FormButton form={form} title={e} key={e} />;
        })}
      </div>
    </div>
  );
}

export default Form;
