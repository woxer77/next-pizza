import React from 'react';

import ProductCard from '@/ui/product-card';
import type { ProductGroupProduct } from '@/modules/products/index';

import type { ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';
import { ROUTES } from '@/constants/routes';

interface ProductGroupProps extends ClassProps {
  listClassName?: string;
  title: string;
  products: ProductGroupProduct[];
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
        {products.map(({ id, name, description, image, basePrice }) => (
          <ProductCard
            key={id}
            name={name}
            description={description}
            href={`${ROUTES.PRODUCTS}/${id}`}
            image={image}
            price={basePrice}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGroup;
