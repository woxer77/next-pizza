import prisma from '@/prisma/prisma-client';

export const categoryService = {
  getAll: getCategories,
  getAllWithProducts: getCategoriesWithProducts
};

async function getCategories() {
  const categories = await prisma.category.findMany();
  return categories;
}

export async function getCategoriesWithProducts() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          variations: true,
          ingredients: true
        }
      }
    }
  });

  return categories;
}
