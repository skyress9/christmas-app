import React from 'react';
import './_Reset.scss';
import ResetSettingsBtn from '../../../common/ResetSettingsBtn/ResetSettingsBtn';

type Props = {
  reset(): void;
};

function Reset({ reset }: Props): JSX.Element {
  return (
    <div className="toys-item toys-reset">
      <button
        type="button"
        className="reset__btn reset-filters__btn"
        onClick={() => {
          reset();
        }}
      >
        Сбросить фильтры
      </button>
      <ResetSettingsBtn />
    </div>
  );
}

export default Reset;
