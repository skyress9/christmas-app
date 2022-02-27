import React from 'react';
import { dragDropHandler, dragOverHandler } from '../../../utils/DragHandlers';

function Map({ page }: { page: React.MutableRefObject<null> }): JSX.Element {
  return (
    <map
      name="tree-map"
      onDragOver={(event) => {
        dragOverHandler(event);
      }}
      onDrop={(event) => {
        dragDropHandler(event, page);
      }}
    >
      <area
        alt="tree"
        coords="402,693,439,676,456,665,473,635,482,609,484,591,489,577,492,559,486,537,475,519,461,500,468,460,459,427,446,404,440,371,425,332,411,315,402,297,413,271,413,234,404,203,383,178,367,169,363,122,339,104,323,91,313,66,303,40,285,15,261,4,240,2,219,16,191,43,155,87,149,120,141,150,127,186,101,212,93,235,92,279,91,301,93,320,51,358,48,401,42,443,34,516,30,570,36,638,41,665,74,693"
        shape="poly"
      />
    </map>
  );
}

export default Map;
