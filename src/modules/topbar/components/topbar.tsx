import React, { Suspense } from 'react';

import Sort from './sort';
import { Skeleton } from '@/ui/skeleton';
import TopBarTabs from './topbar-tabs';

import type { ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';

const TopBar: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className={cn('bg-background sticky top-0 z-5 shadow-lg shadow-neutral-200', className)}>
      <div className="flex-space-between container py-6">
        <Suspense fallback={<Skeleton className="h-13 w-122" />}>
          <TopBarTabs />
        </Suspense>
        <Sort />
      </div>
    </div>
  );
};

export default TopBar;
