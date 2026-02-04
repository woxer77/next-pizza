import React from 'react';

import ProductGroup from '@/components/product-group';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

const Products: React.FC<ClassProps> = ({ className }) => {
  const temp_products = [
    {
      name: 'pizza1',
      description: 'dakjs lkdj alks jdlkas jdlsa jdlksajkld',
      href: 'products/1',
      image: '/pizza/traditional/cheese.png',
      price: 10
    },
    {
      name: 'pizza1',
      description: 'dakjs lkdj alks jdlkas jdlsa jdlksajkld',
      href: 'products/1',
      image: '/pizza/traditional/cheese.png',
      price: 10
    },
    {
      name: 'pizza1',
      description: 'dakjs lkdj alks jdlkas jdlsa jdlksajkld',
      href: 'products/1',
      image: '/pizza/traditional/cheese.png',
      price: 10
    },
    {
      name: 'pizza1',
      description: 'dakjs lkdj alks jdlkas jdlsa jdlksajkld',
      href: 'products/1',
      image: '/pizza/traditional/cheese.png',
      price: 10
    },
    {
      name: 'pizza1',
      description: 'dakjs lkdj alks jdlkas jdlsa jdlksajkld',
      href: 'products/1',
      image: '/pizza/traditional/cheese.png',
      price: 10
    },
    {
      name: 'pizza1',
      description: 'dakjs lkdj alks jdlkas jdlsa jdlksajkld',
      href: 'products/1',
      image: '/pizza/traditional/cheese.png',
      price: 10
    }
  ];

  return (
    <main className={cn('w-full', className)}>
      <ProductGroup title="Pizzas" products={temp_products} />
    </main>
  );
};

export default Products;
