import { serialize } from '@/helpers/utils';
import prisma from '@/prisma/prisma-client';

export const doughTypeService = {
  getAll: getDoughTypes
};

async function getDoughTypes() {
  const doughTypes = await prisma.doughType.findMany({
    orderBy: {
      id: 'asc'
    }
  });
  return serialize(doughTypes);
}
