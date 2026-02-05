export const ProductSortBy = {
  POPULAR: 'popular',
  NEW: 'new',
  ASCENDING: 'ascending',
  DESCENDING: 'descending'
} as const;

export type ProductSortByValue = (typeof ProductSortBy)[keyof typeof ProductSortBy];
