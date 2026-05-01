import ProductGroupObserver from './product-group-observer';

import type { ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';
import { API } from '@/services/api-client';

const Products = async ({ className }: ClassProps) => {
  const categories = await API.category.getAllWithProducts();

  return (
    <main className={cn('flex w-full flex-col gap-10', className)}>
      {categories.map((category) => (
        <ProductGroupObserver
          key={category.id}
          categoryId={category.id}
          title={category.name}
          products={category.products}
        />
      ))}
    </main>
  );
};

export default Products;
