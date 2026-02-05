import { NextResponse } from 'next/server';
import { getCategoriesWithProducts } from '@/modules/products/api/get-categories.server';

export async function GET() {
  try {
    const categories = await getCategoriesWithProducts();
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}
