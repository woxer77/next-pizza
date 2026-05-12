'use client';

import React from 'react';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/ui/dialog';
import { Skeleton } from '@/ui/skeleton';

import type { ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';
import { useRouter } from 'next/navigation';
import { ProductWithRelations } from '@/modules/products/index';

interface ProductDialogProps extends ClassProps {
  product: ProductWithRelations | null;
}

const ProductDialog = ({ className, product }: ProductDialogProps) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const router = useRouter();

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      router.back();
    }
  };

  if (!product) {
    return <Skeleton className={cn('h-64 w-full', className)} />;
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className={cn('', className)}>
        <DialogHeader>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogDescription>{product.description}</DialogDescription>
        </DialogHeader>
        123
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
