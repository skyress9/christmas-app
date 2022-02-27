import React, { useEffect, useState } from 'react';
import State from '../../../../types/State';
import audio from '../../Favorites/audio';

import './_Options.scss';
import getLocalStorage from '../../../../utils/getLocalStorage';
import setLocalStorage from '../../../../utils/setLocalStorage';

type Props = {
  fall: State<boolean>;
};

function Options({ fall }: Props): JSX.Element {
  const [isPlay, setPlay] = useState(getLocalStorage('isPlay', false));

  useEffect(() => {
    setLocalStorage({ isPlay }, [isPlay]);
  }, [isPlay]);

  return (
    <div className="settings__item settings-options">
      <button
        type="button"
        className={
          isPlay
            ? 'settings-options__btn settings-options__audio active'
            : 'settings-options__btn settings-options__audio'
        }
        aria-label="audio"
        onClick={() => {
          if (isPlay) audio.pause();
          else audio.play();
          setPlay(!isPlay);
        }}
      />
      <button
        type="button"
        className={
          fall.value
            ? 'settings-options__btn settings-options__snow active'
            : 'settings-options__btn settings-options__snow'
        }
        aria-label="snow"
        onClick={() => fall.setValue(!fall.value)}
      />
    </div>
  );
}

export default Options;
