import React from 'react';

import ProductGroup from '@/components/product-group';

import type { ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';
import { categoryService } from '@/services/category/category.service';

const Products: React.FC<ClassProps> = async ({ className }) => {
  const categories = await categoryService.getAllWithProducts();

  return (
    <main className={cn('flex w-full flex-col gap-10', className)}>
      {categories.map((category) => (
        <ProductGroup key={category.id} title={category.name} products={category.products} />
      ))}
    </main>
  );
};

export default Products;
