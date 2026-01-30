import React from 'react';

import { Button } from '@/ui/button';
import { MoveRight, ShoppingCart } from 'lucide-react';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

interface CartButtonProps extends ClassProps {
  sum: number;
  quantity: number;
}

const CartButton: React.FC<CartButtonProps> = ({ className, sum, quantity }) => {
  return (
    <Button className={cn('group flex', className)}>
      <strong>${sum}</strong>
      <span className="mx-2 h-full w-px bg-neutral-500" />
      <div className="relative">
        <div className="flex items-center gap-x-1.5 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-0">
          <ShoppingCart />
          <strong>{quantity}</strong>
        </div>
        <MoveRight className="absolute top-1/2 -left-3 size-6 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:translate-x-3 group-hover:opacity-100" />
      </div>
    </Button>
  );
};

export default CartButton;
