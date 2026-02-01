import React from 'react';

function useTabsAnimation(activeId: number, setActiveId: React.Dispatch<React.SetStateAction<number>>) {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const moveableRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLButtonElement>(null);

  function moveTab() {
    if (!parentRef.current || !moveableRef.current || !targetRef.current) return;

    const parentInfo = parentRef.current.getBoundingClientRect();
    const targetInfo = targetRef.current.getBoundingClientRect();

    const left = targetInfo.left - parentInfo.left;
    const width = targetInfo.width;
    const height = targetInfo.height;

    moveableRef.current.style.transform = `translateX(${left}px)`;
    moveableRef.current.style.width = `${width}px`;
    moveableRef.current.style.height = `${height}px`;
  }

  function moveTabToSelect(value: string) {
    setActiveId(parseInt(value, 10));
  }

  React.useEffect(() => {
    moveTab();
  }, [activeId]);

  React.useLayoutEffect(() => {
    moveTab();
  }, []);

  return { parentRef, moveableRef, targetRef, moveTabToSelect };
}

export default useTabsAnimation;
