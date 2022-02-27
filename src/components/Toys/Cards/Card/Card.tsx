import React from 'react';
import Images from '../../../../assets/toys/images';
import handleClickCards from '../../../../utils/handleClickToys';

import './_Card.scss';
import State from '../../../../types/State';

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
  };

  selectToys: State<string[]>;

  notification: State<boolean>;
};

function Card({ data, selectToys, notification }: Props): JSX.Element {
  return (
    <div
      className={selectToys.value.includes(data.name) ? 'cards-item active' : 'cards-item'}
      onClick={() => {
        handleClickCards(data.name, selectToys, notification.setValue);
      }}
      role="button"
      onKeyDown={() => {
        handleClickCards(data.name, selectToys, notification.setValue);
      }}
      tabIndex={0}
    >
      <div className="cards-item__title">{data.name}</div>
      <img className="cards-item__img" src={Images[data.num]} alt="toy" />
      <div className="cards-item__count">Количество: {data.count}</div>
      <div className="toys-cards__year">Год покупки: {data.year}</div>
      <div className="toys-cards__form">Форма игрушки: {data.shape}</div>
      <div className="toys-cards__color">Цвет игрушки: {data.color}</div>
      <div className="toys-cards__size">Размер игрушки: {data.size}</div>
      <div className="toys-cards__favorite">Любимая: {data.favorite ? 'да' : 'нет'}</div>
    </div>
  );
}

export default Card;
