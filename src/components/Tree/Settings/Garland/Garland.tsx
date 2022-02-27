import React from 'react';
import './_Garland.scss';
import State from '../../../../types/State';

function Garland({ garlandColor }: { garlandColor: State<string> }): JSX.Element {
  const garlandData = [
    {
      title: 'multicolor',
      color: 'linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8)',
    },
    {
      title: 'red',
      color: '#f82424',
    },
    {
      title: 'blue',
      color: '#0f65ff',
    },
    {
      title: 'yellow',
      color: '#fffb00',
    },
    {
      title: 'green',
      color: '#73fc17',
    },
    {
      title: 'transparent',
      color: '#fff',
    },
  ];

  return (
    <div className="settings__item settings-garland">
      <div className="settings-garland__title">Гирлянда</div>
      <div className="garland-items">
        {garlandData.map(({ title, color }) => (
          <button
            type="button"
            key={title}
            aria-label={title}
            className="garland-items__item"
            style={{
              background: color,
            }}
            onClick={() => garlandColor.setValue(title)}
          />
        ))}
      </div>
    </div>
  );
}

export default Garland;
