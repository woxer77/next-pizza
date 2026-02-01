import React from 'react';

import { TabsItem } from '../types/types';

interface UseTabsStateProps {
  items: TabsItem[];
  limit: number;
  defaultActiveId: number;
}

function useTabsState({ items, limit, defaultActiveId }: UseTabsStateProps) {
  const [activeId, setActiveId] = React.useState(defaultActiveId);

  const displayedItems = items.slice(0, limit);
  const itemsInSelect = items.slice(limit);
  const isSelectActive = itemsInSelect.some((item) => item.id === activeId);

  return {
    activeId,
    setActiveId,
    displayedItems,
    itemsInSelect,
    isSelectActive
  };
}

export default useTabsState;
