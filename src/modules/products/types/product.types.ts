// eslint-disable-next-line
import type { Product as PrismaProduct } from '@prisma/client';

export interface Product extends Omit<PrismaProduct, 'basePrice'> {
  basePrice: number;
}
