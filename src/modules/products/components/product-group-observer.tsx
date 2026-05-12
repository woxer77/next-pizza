'use client';

import React from 'react';

import ProductGroup from '@/components/product-group';

import { ProductWithRelations } from '../types/product.types';
import { categoryStore } from '@/stores/category.store';
import { getProductGroupId } from '../helpers/product-group.helpers';

interface ProductGroupObserverProps {
  listClassName?: string;
  categoryId: number;
  title: string;
  products: ProductWithRelations[];
}

const ProductGroupObserver = ({ categoryId, title, products }: ProductGroupObserverProps) => {
  const productGroupRef = React.useRef(null);
  const productGroupId = getProductGroupId(categoryId);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const state = categoryStore.getState();
        if (entry.isIntersecting && !state.intersectionIgnore && state.id !== categoryId) {
          state.setCategory(categoryId);
        }
      },
      { threshold: 0.2 }
    );

    if (productGroupRef.current) {
      observer.observe(productGroupRef.current);
    }

    return () => {
      if (productGroupRef.current) {
        observer.unobserve(productGroupRef.current);
      }
    };
  }, [categoryId]);

  return <ProductGroup ref={productGroupRef} id={productGroupId} title={title} products={products} />;
};

export default ProductGroupObserver;
