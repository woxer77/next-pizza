import { serialize } from '@/helpers/utils';
import prisma from '@/prisma/prisma-client';

export const sizeService = {
  getAll: getSizes
};

async function getSizes() {
  const sizes = await prisma.size.findMany({
    orderBy: {
      id: 'asc'
    }
  });
  return serialize(sizes);
}
