import prisma from '@/prisma/prisma-client';

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
