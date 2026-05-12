import React from 'react';

import ProductCard from '@/ui/product-card';
import type { ProductWithRelations } from '@/modules/products/index';

import type { ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';

interface ProductGroupProps extends ClassProps {
  listClassName?: string;
  title: string;
  products: ProductWithRelations[];
  ref?: React.Ref<HTMLDivElement>;
  id?: string;
}

const ProductGroup = ({ className, title, products, listClassName, ref, id }: ProductGroupProps) => {
  return (
    <section className={cn('last:mb-10', className)}>
      <h2 className="mb-6 text-3xl font-bold capitalize" ref={ref} id={id}>
        {title}
      </h2>
      <div className={cn('grid gap-12', listClassName, 'grid-cols-3')}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGroup;
