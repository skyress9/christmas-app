import React from 'react';

export function dragStartHandler(e: React.DragEvent<HTMLElement>, id: string): void {
  e.dataTransfer.setData('transfer', id);
}

export function dragEndHandler(
  e: React.DragEvent<HTMLElement>,
  parent: HTMLElement,
  setCount: React.Dispatch<React.SetStateAction<number>>
): void {
  const element = e.target as HTMLElement;
  if (e.dataTransfer.dropEffect !== 'copy') {
    parent.append(element);

    if (element) {
      element.style.left = 'auto';
      element.style.top = 'auto';
    }
  }

  setCount(parent.childNodes.length - 1);
}

export function dragOverHandler(e: React.DragEvent<HTMLElement>): void {
  e.preventDefault();
}

export function dragDropHandler(e: React.DragEvent<HTMLElement>, page: React.MutableRefObject<null>): void {
  e.preventDefault();
  const element = document.getElementById(e.dataTransfer.getData('transfer')) as HTMLElement;
  const container = e.target as HTMLAreaElement;
  const treeContainer = page.current as unknown as HTMLElement;

  const coordX = element.offsetWidth;
  const coordY = element.offsetHeight;

  if (element) {
    element.style.left = `${
      ((e.clientX - treeContainer.getBoundingClientRect().left) / (treeContainer.offsetWidth + coordX)) * 100
    }%`;
    element.style.top = `${
      ((e.clientY - treeContainer.getBoundingClientRect().top) / (treeContainer.offsetWidth + coordY)) * 100
    }%`;
  }

  container.append(element);
}
