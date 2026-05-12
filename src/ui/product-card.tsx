import React from 'react';

import Image from 'next/image';
import { Button } from './button';
import { Plus } from 'lucide-react';

import type { ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';
import { useRouter } from 'next/navigation';
import { productStore } from '@/stores/product.store';
import { ProductWithRelations } from '@/modules/products/index';
import { ROUTES } from '@/constants/routes';

interface ProductCardProps extends ClassProps {
  product: ProductWithRelations;
}

const ProductCard: React.FC<ProductCardProps> = ({ className, product }) => {
  const router = useRouter();
  const setProduct = productStore((state) => state.setProduct);
  const href = `${ROUTES.PRODUCTS}/${product.id}`;
  // TODO: bad to code this implementation in UI component
  const handleNavigate = () => {
    setProduct(product);

    router.push(href);
  };

  return (
    <div className={cn('flex flex-col', className)}>
      <button className="flex-center group" onClick={handleNavigate}>
        <Image
          src={product.image}
          alt={product.name}
          className="mb-4 cursor-pointer transition-transform group-hover:-translate-y-1.5"
          width={300}
          height={300}
        />
      </button>
      <div className="mb-3 flex grow flex-col gap-2">
        <h4 className="text-2xl font-bold capitalize">{product.name}</h4>
        <p className="text-description">{product.description}</p>
      </div>
      <div className="flex-space-between">
        <p className="text-lg">
          from <strong className="text-xl font-extrabold">${product.basePrice}</strong>
        </p>
        <Button onClick={handleNavigate} variant="secondary" className="flex gap-2 px-6! py-5 text-lg font-bold">
          <Plus />
          <p>Add</p>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
