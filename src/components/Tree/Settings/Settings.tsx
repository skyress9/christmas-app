import React from 'react';
import Options from './Options/Options';
import Trees from './Trees/Trees';
import Background from './Background/Background';
import Garland from './Garland/Garland';
import SettingsReset from './SettingsReset/SettingsReset';

import State from '../../../types/State';

import './_Settings.scss';

type Props = {
  bg: State<string>;
  tree: State<string>;
  fall: State<boolean>;
  color: State<string>;
};

function Settings({ bg, tree, fall, color }: Props): JSX.Element {
  return (
    <div className="page-tree__aside page-tree__item page-tree__settings">
      <Options fall={fall} />
      <Trees tree={tree} />
      <Background bg={bg} />
      <Garland garlandColor={color} />
      <SettingsReset />
    </div>
  );
}

export default Settings;
