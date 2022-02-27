import React, { useEffect, useState } from 'react';
import Controls from './Controls/Controls';
import Cards from './Cards/Cards';
import toysFilter from '../../utils/toysFilter';
import Notification from './Notification/Notification';
import setLocalStorage from '../../utils/setLocalStorage';
import getLocalStorage from '../../utils/getLocalStorage';

import './_ToysView.scss';

type Props = {
  data: {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;
  }[];

  selectToys: {
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
  };
};

const initState = {
  search: '',
  sort: 'select-name-def',
  form: [],
  sliderCount: {
    min: '1',
    max: '12',
  },
  sliderYear: {
    min: '1940',
    max: '2020',
  },
  color: [],
  size: [],
  isFavorite: false,
};

function ToysView({ data, selectToys }: Props): JSX.Element {
  const [search, setSearch] = useState(getLocalStorage('search', initState.search));
  const [sort, setSort] = useState(getLocalStorage('sort', initState.sort));
  const [form, setForm] = useState<string[]>(getLocalStorage<string[]>('form', initState.form));
  const [sliderCount, setSliderCount] = useState(getLocalStorage('sliderCount', initState.sliderCount));
  const [sliderYear, setSliderYear] = useState(getLocalStorage('sliderYear', initState.sliderYear));
  const [color, setColor] = useState<string[]>(getLocalStorage<string[]>('color', initState.color));
  const [size, setSize] = useState<string[]>(getLocalStorage<string[]>('size', initState.size));
  const [isFavorite, setFavorite] = useState(getLocalStorage('isFavorite', initState.isFavorite));
  const [notification, setNotification] = useState(false);

  const toys = toysFilter(data, search, sort, form, sliderCount, sliderYear, color, size, isFavorite);

  const states = [search, sort, form, sliderCount, sliderYear, color, size, isFavorite];

  useEffect(() => {
    setLocalStorage(initState, states);
  }, states);

  function reset(): void {
    setSearch(initState.search);
    setForm(initState.form);
    setSliderCount(initState.sliderCount);
    setSliderYear(initState.sliderYear);
    setColor(initState.color);
    setSize(initState.size);
    setFavorite(initState.isFavorite);
  }

  return (
    <div className="page page-toys">
      <div className="container container-toys">
        <Controls
          search={{ value: search, setValue: setSearch }}
          sort={{ value: sort, setValue: setSort }}
          form={{ value: form, setValue: setForm }}
          sliderCount={{ value: sliderCount, setValue: setSliderCount }}
          sliderYear={{ value: sliderYear, setValue: setSliderYear }}
          color={{ value: color, setValue: setColor }}
          size={{ value: size, setValue: setSize }}
          favorite={{ value: isFavorite, setValue: setFavorite }}
          reset={() => reset()}
          selectToysValue={selectToys.value}
        />
        <Cards data={toys} selectToys={selectToys} notification={{ value: notification, setValue: setNotification }} />
        <Notification text="Все слоты заполнены" notification={{ value: notification, setValue: setNotification }} />
      </div>
    </div>
  );
}

export default ToysView;
