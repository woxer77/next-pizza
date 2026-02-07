import React from 'react';

import ProductCardSkeleton from './product-card-skeleton';

import type { ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';

interface ProductsSkeletonProps extends ClassProps {
  limit?: number;
}

const ProductsSkeleton: React.FC<ProductsSkeletonProps> = ({ className, limit = 3 }) => {
  return (
    <div className={cn('grid w-full gap-10 last:mb-10', className, 'grid-cols-3')}>
      {Array.from({ length: limit }).map((_, idx) => (
        <ProductCardSkeleton key={idx} />
      ))}
    </div>
  );
};

export default ProductsSkeleton;
