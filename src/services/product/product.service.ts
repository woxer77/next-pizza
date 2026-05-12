import { serialize } from '@/helpers/utils';
import prisma from '@/prisma/prisma-client';

export const productService = {
  getProduct: getProduct
};

async function getProduct(id: number) {
  const variation = await prisma.product.findFirst({
    where: {
      id
    },
    include: {
      ingredients: true,
      variations: true
    }
  });
  return serialize(variation);
}
