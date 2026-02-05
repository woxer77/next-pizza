import { Product } from '../types/product.types';

export async function getProducts(): Promise<Product[]> {
  const response = await fetch('/api/products');

  if (!response.ok) {
    throw new Error(`Failed to fetch products: HTTP ${response.status}`);
  }

  return response.json();
}
