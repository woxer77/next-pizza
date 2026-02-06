import React from 'react';

import { Skeleton } from '@/ui/skeleton';
import FilterGroupTitle from './filter-group-title';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

interface FilterGroupSkeletonProps extends ClassProps {
  limit?: number;
  title?: string;
}

const FilterGroupSkeleton: React.FC<FilterGroupSkeletonProps> = ({ className, limit = 5, title }) => {
  return (
    <div className={cn('', className)}>
      {title && <FilterGroupTitle title={title} />}
      {Array.from({ length: limit }).map((_, idx) => (
        <div key={idx} className="mb-2 flex h-6 w-full gap-2">
          <Skeleton className="h-full basis-1/10 rounded-sm" />
          <Skeleton className="h-full basis-8/10 rounded-sm" />
        </div>
      ))}
    </div>
  );
};

export default FilterGroupSkeleton;
