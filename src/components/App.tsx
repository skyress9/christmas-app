import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';

import Header from './common/Header/Header';
import ToysView from './Toys/ToysView';
import Main from './Main/Main';
import Tree from './Tree/Tree';
import Footer from './common/Footer/Footer';
import Data from '../data/data';
import getLocalStorage from '../utils/getLocalStorage';

import './_App.scss';

function App(): JSX.Element {
  const [selectToys, setSelectToys] = useState<string[]>(getLocalStorage('favorites', []));

  const pages = [
    {
      title: 'Стартовая страница',
      url: '/',
      Component: <Main />,
    },
    {
      title: 'Игрушки',
      url: '/decorations',
      Component: <ToysView data={Data} selectToys={{ value: selectToys, setValue: setSelectToys }} />,
    },
    {
      title: 'Ёлка',
      url: '/tree',
      Component: <Tree toys={{ value: selectToys, setValue: setSelectToys }} />,
    },
  ];

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(selectToys));
  }, [selectToys]);

  return (
    <HashRouter>
      <Header>
        <ul className="header-nav__items">
          {pages.map(({ title, url }) => (
            <li key={title} className="header-nav__item">
              <NavLink className="header-nav__btn" to={url}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </Header>
      <Routes>
        {pages.map(({ Component, url }) => {
          return <Route key={url} path={url} element={Component} />;
        })}
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
