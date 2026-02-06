import prisma from '@/prisma/prisma-client';

export const sizeService = {
  getAll: getSizes
};

async function getSizes() {
  const sizes = await prisma.size.findMany();
  return sizes;
}
