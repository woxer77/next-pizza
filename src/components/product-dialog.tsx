'use client';

import React from 'react';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/ui/dialog';

import type { ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';
import { useRouter } from 'next/navigation';

interface ProductDialogProps extends ClassProps {
  id: string;
}

const ProductDialog = ({ className, id }: ProductDialogProps) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const router = useRouter();

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className={cn('', className)}>
        <DialogHeader>
          <DialogTitle>Product {id}</DialogTitle>
          <DialogDescription>Product description {id}</DialogDescription>
        </DialogHeader>
        <p>Product content {id}</p>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
