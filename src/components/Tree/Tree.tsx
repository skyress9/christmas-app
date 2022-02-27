import React, { useEffect, useState } from 'react';
import Settings from './Settings/Settings';
import Primary from './Primary/Primary';
import Favorites from './Favorites/Favorites';

import bgData from '../../assets/bg/bgData';
import treeData from '../../assets/tree/treeData';
import State from '../../types/State';

import './_Tree.scss';
import getLocalStorage from '../../utils/getLocalStorage';
import setLocalStorage from '../../utils/setLocalStorage';

function Tree({ toys }: { toys: State<string[]> }): JSX.Element {
  const [bg, setBg] = useState(getLocalStorage('bg', bgData[0].path));
  const [tree, setTree] = useState(getLocalStorage('tree', treeData[0].path));
  const [isFall, setFall] = useState(getLocalStorage('isFall', false));
  const [garlandColor, setColor] = useState(getLocalStorage('garlandColor', 'transparent'));

  const states = [bg, tree, isFall, garlandColor];

  useEffect(() => {
    setLocalStorage({ bg, tree, isFall, garlandColor }, states);
  }, states);

  return (
    <div className="page page-tree">
      <div className="container container-tree">
        <Settings
          bg={{ value: bg, setValue: setBg }}
          tree={{ value: tree, setValue: setTree }}
          fall={{ value: isFall, setValue: setFall }}
          color={{ value: garlandColor, setValue: setColor }}
        />
        <Primary
          bg={{ value: bg, setValue: setBg }}
          tree={{ value: tree, setValue: setTree }}
          fall={{ value: isFall, setValue: setFall }}
          garland={{ value: garlandColor, setValue: setColor }}
        />
        <Favorites toys={toys} />
      </div>
    </div>
  );
}

export default Tree;
