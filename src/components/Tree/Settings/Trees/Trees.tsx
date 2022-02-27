import React from 'react';
import treeData from '../../../../assets/tree/treeData';
import './_Trees.scss';
import State from '../../../../types/State';

function Trees({ tree }: { tree: State<string> }): JSX.Element {
  return (
    <div className="settings__item settings-trees">
      <div className="settings-trees__title">Выберите ёлку</div>
      <div className="trees-items">
        {treeData.map(({ title, path }) => (
          <button
            type="button"
            aria-label={title}
            key={title}
            className="trees-items__item"
            style={{
              backgroundImage: `url(${path})`,
            }}
            onClick={() => {
              tree.setValue(path);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Trees;
