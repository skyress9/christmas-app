import React from 'react';
import State from '../../../../types/State';

import './_Tree.scss';

function Tree({ tree }: { tree: State<string> }): JSX.Element {
  return <img className="primary__tree" useMap="#tree-map" src={tree.value} alt="img" />;
}

export default Tree;
