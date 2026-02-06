import React from 'react';

import ProductCardSkeleton from './product-card-skeleton';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

interface ProductsSkeletonProps extends ClassProps {
  limit?: number;
}

const ProductsSkeleton: React.FC<ProductsSkeletonProps> = ({ className, limit = 3 }) => {
  return (
    <div className={cn('grid w-full gap-12', className, 'grid-cols-3')}>
      {Array.from({ length: limit }).map((_, idx) => (
        <ProductCardSkeleton key={idx} />
      ))}
    </div>
  );
};

export default ProductsSkeleton;
