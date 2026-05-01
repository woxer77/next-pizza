import React from 'react';

const useTabsAnimation = (activeId: number) => {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const moveableRef = React.useRef<HTMLDivElement>(null);
  const targetRef = React.useRef<HTMLButtonElement>(null);

  const moveTab = () => {
    if (!parentRef.current || !moveableRef.current || !targetRef.current) return;

    const parentInfo = parentRef.current.getBoundingClientRect();
    const targetInfo = targetRef.current.getBoundingClientRect();

    const left = targetInfo.left - parentInfo.left;
    const width = targetInfo.width;
    const height = targetInfo.height;

    moveableRef.current.style.transform = `translateX(${left}px)`;
    moveableRef.current.style.width = `${width}px`;
    moveableRef.current.style.height = `${height}px`;
  };

  React.useEffect(() => {
    moveTab();
  }, [activeId]);

  return { parentRef, moveableRef, targetRef };
};

export default useTabsAnimation;
