import React from 'react';
import './_Sort.scss';

type Props = {
  sort: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  };
};

function Sort({ sort }: Props): JSX.Element {
  return (
    <div className="toys-item toys-sort">
      <div className="sort-title">Сортировать</div>
      <select
        value={sort.value}
        className="sort-select"
        id="sort-select"
        onChange={(event) => sort.setValue(event.target.value)}
      >
        <option value="select-name-def" disabled hidden>
          Выбрать параметр
        </option>
        <option value="select-name-asc">По названию от «А» до «Я»</option>
        <option value="select-name-desc">По названию от «Я» до «А»</option>
        <option value="select-year-asc">По году приобретения по возрастанию</option>
        <option value="select-year-desc">По году приобретения по убыванию</option>
      </select>
    </div>
  );
}

export default Sort;
