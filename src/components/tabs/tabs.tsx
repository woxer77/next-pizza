'use client';

import React from 'react';

import Tab from './tab';
import TabSelect from './tab-select';

import type { ClassProps } from '@/types/global';
import type { TabsItem } from './types/types';
import { cn } from '@/lib/utils';
import { DEFAULT_ACTIVE_ID, DEFAULT_TABS_LIMIT } from './constants/tabs.constants';
import useTabs from './hooks/use-tabs';
import useTabsAnimation from './hooks/use-tabs-animation';

interface TabsProps extends ClassProps {
  items: TabsItem[];
  limit?: number;
  defaultActiveId?: number;
}

const Tabs: React.FC<TabsProps> = ({
  className,
  items,
  limit = DEFAULT_TABS_LIMIT,
  defaultActiveId = DEFAULT_ACTIVE_ID
}) => {
  const { activeId, setActiveId, displayedItems, itemsInSelect, isSelectActive } = useTabs({
    items: items,
    limit: limit,
    defaultActiveId: defaultActiveId
  });

  const { parentRef, moveableRef, targetRef, moveTabToSelect } = useTabsAnimation(activeId, setActiveId);

  return (
    <section
      ref={parentRef}
      className={cn('relative flex items-center gap-x-1 rounded-md bg-neutral-100 p-1', className)}>
      {displayedItems.map(({ id, name }) => (
        <Tab
          key={id}
          onClick={() => setActiveId(id)}
          ref={activeId === id ? targetRef : null}
          isActive={activeId === id}
          text={name}
        />
      ))}
      {itemsInSelect.length > 0 && (
        <TabSelect
          items={itemsInSelect}
          value={isSelectActive ? activeId.toString() : ''}
          onValueChange={moveTabToSelect}
          ref={isSelectActive ? targetRef : null}
          isActive={isSelectActive}
        />
      )}
      <div
        ref={moveableRef}
        className="bg-background absolute top-1/2 left-0 -translate-y-1/2 rounded-md shadow-md transition-all duration-300"
      />
    </section>
  );
};

export default Tabs;
