import React from 'react';

import { categoryStore } from '@/stores/category.store';

import { getProductGroupId } from '@/modules/products/helpers/product-group.helpers';

function useTabsNavigation(activeId: number, setActiveId: React.Dispatch<React.SetStateAction<number>>) {
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const categoryStoreId = categoryStore((state) => state.id);

  const jumpToCategory = (id: number) => {
    const { setIntersectionIgnore } = categoryStore.getState();
    const targetElement = document.getElementById(getProductGroupId(id));
    const topbarElement = document.getElementById('topbar');
    const topbarHeight = topbarElement ? topbarElement.offsetHeight : 100;
    const marginHeight = 20;
    setIntersectionIgnore(true);

    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - topbarHeight - marginHeight;
      window.scrollTo({ top: targetPosition });
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setIntersectionIgnore(false);
    }, 1000);
  };

  const parseTabId = (id: number | string) => {
    if (typeof id === 'number') return id;

    return parseInt(id, 10);
  };

  const onTabClick = (id: number | string) => {
    const nextId = parseTabId(id);

    if (activeId === nextId) return;

    setActiveId(nextId);
    jumpToCategory(nextId);
  };

  React.useEffect(() => {
    if (categoryStoreId !== activeId) {
      setActiveId(categoryStoreId);
    }
  }, [categoryStoreId, setActiveId]);

  React.useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return { onTabClick };
}

export default useTabsNavigation;
