import { create } from 'zustand';
import { ProductWithRelations } from '@/modules/products/index';

interface ProductStore {
  product: ProductWithRelations | null;
  setProduct: (newValue: ProductWithRelations | null) => void;
}

export const productStore = create<ProductStore>((set) => ({
  product: null,
  setProduct: (newValue) => set({ product: newValue })
}));
