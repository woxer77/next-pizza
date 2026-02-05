// eslint-disable-next-line
import type { Product as PrismaProduct } from '@prisma/client';
import type { Ingredient } from '@/types/ingredients.types';
import type { ProductVariation } from '@prisma/client';

export interface Product extends Omit<PrismaProduct, 'basePrice'> {
  basePrice: number;
}
export interface ProductGroupProduct extends Product {
  variations: ProductVariation[];
  ingredients: Ingredient[];
}
