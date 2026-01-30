'use client';

import React from 'react';

import Tab from './tab';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';
import type { TabsItem } from './types';

interface TabsProps extends ClassProps {
  items: TabsItem[];
  limit?: number;
  activeDefaultId?: number;
}

const Tabs: React.FC<TabsProps> = ({ className, items, limit = 5, activeDefaultId = 0 }) => {
  const filteredItems = items.slice(0, limit);

  const [activeId, setActiveId] = React.useState(activeDefaultId);

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

  React.useEffect(() => {
    moveTab();
  }, [activeId]);

  React.useLayoutEffect(() => {
    moveTab();
  }, []);

  return (
    <section ref={parentRef} className={cn('relative flex gap-x-1 rounded-xl bg-neutral-100 p-1', className)}>
      {filteredItems.map(({ id, name }) => (
        <Tab
          key={id}
          onClick={() => setActiveId(id)}
          ref={activeId === id ? targetRef : null}
          isActive={activeId === id}
          text={name}
        />
      ))}
      <div
        ref={moveableRef}
        className="bg-background absolute top-1/2 left-0 -translate-y-1/2 rounded-xl shadow-md transition-all duration-300"
      />
    </section>
  );
};

export default Tabs;
