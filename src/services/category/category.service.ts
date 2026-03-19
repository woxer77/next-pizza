import { serialize } from '@/helpers/utils';
import prisma from '@/prisma/prisma-client';

export const categoryService = {
  getAll: getCategories,
  getAllWithProducts: getCategoriesWithProducts
};

async function getCategories() {
  const categories = await prisma.category.findMany();
  return serialize(categories);
}

async function getCategoriesWithProducts() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          variations: true,
          ingredients: true
        }
      }
    },
    orderBy: {
      id: 'asc'
    }
  });

  return serialize(categories);
}
