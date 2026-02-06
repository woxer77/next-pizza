import prisma from '@/prisma/prisma-client';

export const doughTypeService = {
  getAll: getDoughTypes
};

async function getDoughTypes() {
  const doughTypes = await prisma.doughType.findMany();
  return doughTypes;
}
