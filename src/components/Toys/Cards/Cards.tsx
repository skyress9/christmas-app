import React from 'react';
import Card from './Card/Card';
import './_Cards.scss';

type Filter<T> = {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
};

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

  selectToys: Filter<string[]>;
  notification: Filter<boolean>;
};

function Cards({ data, selectToys, notification }: Props): JSX.Element {
  return (
    <div className="toys-cards">
      {data.length > 0 ? (
        <div className="cards-items">
          {data.map((toyData) => {
            return <Card data={toyData} key={toyData.num} selectToys={selectToys} notification={notification} />;
          })}
        </div>
      ) : (
        <div className="cards-none">Совпадений не обнаружено</div>
      )}
    </div>
  );
}

export default Cards;
