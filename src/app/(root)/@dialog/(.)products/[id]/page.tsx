'use client';

import ProductDialog from '@/components/product-dialog';

import { productStore } from '@/stores/product.store';

const ProductDialogInterceptor = () => {
  const productFromStore = productStore((state) => state.product);

  return <ProductDialog product={productFromStore} />;
};

export default ProductDialogInterceptor;
