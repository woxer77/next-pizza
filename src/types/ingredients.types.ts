// eslint-disable-next-line no-restricted-imports
import { Ingredient as PrismaIngredient } from '@prisma/client';

export interface Ingredient extends Omit<PrismaIngredient, 'price'> {
  price: number;
}
