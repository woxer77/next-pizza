export type InputPriceType = 'from' | 'to';

export interface PriceRange<T> {
  from: T;
  to: T;
}
