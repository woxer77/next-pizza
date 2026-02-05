import prisma from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';
import type { Product } from '@/modules/products/index';

export async function GET() {
  try {
    const products: Product[] = await prisma.product.findMany();

    return NextResponse.json(products);
  } catch (error) {
    console.error('Failed to get products: ', error);

    return NextResponse.json({ error: 'Failed to get products' }, { status: 500 });
  }
}
