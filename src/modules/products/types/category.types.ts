import type { Prisma } from '@prisma/client';
import type { getCategoriesWithProducts } from '../api/get-categories.server';

export type CategoryWithProducts = Prisma.PromiseReturnType<typeof getCategoriesWithProducts>[number];
