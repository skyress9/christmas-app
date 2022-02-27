import React from 'react';

function ResetSettingsBtn(): JSX.Element {
  return (
    <button
      type="button"
      className="reset__btn reset-settings__btn"
      onClick={() => {
        localStorage.clear();
      }}
    >
      Сбросить настройки
    </button>
  );
}

export default ResetSettingsBtn;
