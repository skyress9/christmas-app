import React from 'react';
import { NavLink } from 'react-router-dom';

import './_Main.scss';

function Main(): JSX.Element {
  return (
    <div className="page page-main">
      <div className="container container-main">
        <div className="main__title">Помогите бабушке нарядить елку</div>
        <NavLink className="main__btn" to="/decorations">
          Начать
        </NavLink>
      </div>
    </div>
  );
}

export default Main;
