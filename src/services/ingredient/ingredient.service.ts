import prisma from '@/prisma/prisma-client';

export const ingredientService = {
  getAll: getIngredients
};

async function getIngredients() {
  const ingredients = await prisma.ingredient.findMany({
    orderBy: {
      id: 'asc'
    }
  });
  return ingredients;
}
