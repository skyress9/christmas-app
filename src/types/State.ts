import React from 'react';

type State<T> = {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
};

export default State;
