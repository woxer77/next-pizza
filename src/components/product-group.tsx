import React from 'react';

import ProductCard from '@/ui/product-card';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

interface ProductGroupProps extends ClassProps {
  listClassName?: string;
  title: string;
  products: any[]; // TODO: change any
}

const ProductGroup: React.FC<ProductGroupProps> = ({ className, title, products, listClassName }) => {
  return (
    <section className={cn('', className)}>
      <h3 className="mb-6 text-3xl font-bold capitalize">{title}</h3>
      <div className={cn('grid gap-12', listClassName, 'grid-cols-3')}>
        {products.map(
          (
            { product, idx } // TODO: change idx
          ) => (
            <ProductCard
              key={idx}
              name={'pizza1'}
              description={'dakjs lkdj alks jdlkas jdlsa jdlksajkld'}
              href={'products/1'}
              image={'/pizza/traditional/cheese.png'}
              price={10}
            />
          )
        )}
      </div>
    </section>
  );
};

export default ProductGroup;
