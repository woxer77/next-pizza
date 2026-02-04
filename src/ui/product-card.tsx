import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './button';

import type { ClassProps, ProductRoute } from '@/types/global';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';

interface ProductCardProps extends ClassProps {
  name: string;
  description: string;
  price: number;
  href: ProductRoute;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ className, name, description, price, href, image }) => {
  return (
    <div className={cn('flex flex-col', className)}>
      <Link href={href} className="flex-center">
        <Image src={image} alt={name} className="mb-4 h-[300px]" width={300} height={300} />
      </Link>
      <div className="mb-3 flex flex-col gap-2">
        <h4 className="text-2xl font-bold capitalize">{name}</h4>
        <p className="text-description">{description}</p>
      </div>
      <div className="flex-space-between">
        <p className="text-lg">
          from <strong className="text-xl font-extrabold">${price}</strong>
        </p>
        <Link href={href}>
          <Button variant="secondary" className="flex gap-2 px-6! py-5 text-lg font-bold">
            <Plus />
            <p>Add</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
