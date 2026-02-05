import { CategoryWithProducts } from '../types/category.types';

export const getCategoriesWithProducts = async (): Promise<CategoryWithProducts[]> => {
  const response = await fetch('/api/categories');

  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }

  return response.json();
};
