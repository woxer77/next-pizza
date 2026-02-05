import React from 'react';

import ProductCard from '@/ui/product-card';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';
import type { Product } from '@/modules/products';

interface ProductGroupProps extends ClassProps {
  listClassName?: string;
  title: string;
  products: Product[];
}

const ProductGroup: React.FC<ProductGroupProps> = ({ className, title, products, listClassName }) => {
  return (
    <section className={cn('', className)}>
      <h3 className="mb-6 text-3xl font-bold capitalize">{title}</h3>
      <div className={cn('grid gap-12', listClassName, 'grid-cols-3')}>
        {products.map(({ id, name, description, image, basePrice }) => (
          <ProductCard
            key={id}
            name={name}
            description={description}
            href={`products/${id}`}
            image={image}
            price={basePrice}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGroup;
