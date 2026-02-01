import useTabsState from './use-tabs-state';
import useTabsAnimation from './use-tabs-animation';
import type { TabsItem } from '../types/types';

interface UseTabsProps {
  items: TabsItem[];
  limit: number;
  defaultActiveId: number;
}

function useTabs({ items, limit, defaultActiveId }: UseTabsProps) {
  const state = useTabsState({ items, limit, defaultActiveId });
  const animation = useTabsAnimation(state.activeId, state.setActiveId);

  return { ...state, ...animation };
}

export default useTabs;
