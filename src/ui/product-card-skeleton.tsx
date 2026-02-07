import React from 'react';

import { Skeleton } from './skeleton';

import type { ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';

const ProductCardSkeleton: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className={cn('flex flex-col', className)}>
      <Skeleton className="mb-4 h-[300px] w-full" />
      <div className="mb-3 flex flex-col gap-2">
        <Skeleton className="h-6 w-[47%]" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
      <div className="flex-space-between">
        <Skeleton className="h-9 w-[47%]" />
        <Skeleton className="h-9 w-[47%]" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
