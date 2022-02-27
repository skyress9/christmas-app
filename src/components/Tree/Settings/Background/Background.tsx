import React from 'react';
import bgData from '../../../../assets/bg/bgData';

import State from '../../../../types/State';

import './_Background.scss';

function Background({ bg }: { bg: State<string> }): JSX.Element {
  return (
    <div className="settings__item settings-background">
      <div className="settings-background__title">Выберите фон</div>
      <div className="background-items">
        {bgData.map(({ title, path }) => (
          <button
            type="button"
            aria-label={title}
            key={title}
            className={bg.value === path ? 'background-items__item active' : 'background-items__item'}
            style={{
              backgroundImage: `url(${path})`,
            }}
            onClick={() => {
              bg.setValue(path);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Background;
