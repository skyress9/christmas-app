import React from 'react';

import handleClick from './handleClick';
import State from '../types/State';

type Filter = State<string[]>;

type Notification = React.Dispatch<React.SetStateAction<boolean>>;

const handleClickCards = (title: string, selectToys: Filter, setNotification: Notification): void => {
  if (selectToys.value.length < 20) handleClick(title, selectToys);
  else if (!selectToys.value.includes(title)) setNotification(true);
  else {
    const newForm = selectToys.value.slice(0);
    selectToys.setValue(newForm.filter((n: string) => n !== title));
  }
};

export default handleClickCards;
