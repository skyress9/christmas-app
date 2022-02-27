import React from 'react';

import Sort from './Sort/Sort';
import Form from './Form/Form';
import Color from './Color/Color';
import Size from './Size/Size';
import Slider from './Slider/Slider';
import Reset from './Reset/Reset';
import './_Controls.scss';

type Filter<T> = {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
};

type SliderValue = {
  min: string;
  max: string;
};

type Props = {
  search: Filter<string>;
  sort: Filter<string>;
  form: Filter<string[]>;
  color: Filter<string[]>;
  size: Filter<string[]>;
  favorite: Filter<boolean>;
  sliderCount: Filter<SliderValue>;
  sliderYear: Filter<SliderValue>;

  reset(): void;

  selectToysValue: string[];
};

function Controls({
  search,
  sort,
  form,
  sliderCount,
  sliderYear,
  color,
  size,
  favorite,
  reset,
  selectToysValue,
}: Props): JSX.Element {
  return (
    <div className="toys-controls">
      <Sort sort={sort} />

      <div className="toys-item toys-search">
        <input
          className="toys-search__input"
          type="search"
          placeholder="Поиск"
          autoComplete="off"
          value={search.value}
          onChange={(event) => search.setValue(event.target.value)}
        />
        <div className="toys-count">
          <span className="toys-count__num">{selectToysValue.length}</span>
        </div>
      </div>

      <Form form={form} />

      <Slider
        options={{
          title: 'Количество экземпляров',
          step: 1,
          min: 1,
          max: 12,
        }}
        slider={sliderCount}
      />

      <Slider
        options={{
          title: 'Год приобретения',
          step: 10,
          min: 1940,
          max: 2020,
        }}
        slider={sliderYear}
      />

      <Color color={color} />

      <Size size={size} />

      <div className="toys-item toys-favorite">
        <input
          type="checkbox"
          id="toys-favorite"
          className="toys-favorite__input"
          checked={favorite.value}
          onChange={(event) => {
            favorite.setValue(event.target.checked);
          }}
        />
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className="toys-favorite__label" htmlFor="toys-favorite">
          Только любимые
        </label>
      </div>

      <Reset reset={reset} />
    </div>
  );
}

export default Controls;
