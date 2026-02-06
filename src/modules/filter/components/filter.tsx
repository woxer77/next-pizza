import React from 'react';

import CheckboxGroup from '@/components/checkbox-group';
import FilterGroup from './filter-group';
import { Button } from '@/ui/button';
import FilterPrice from './filter-price';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';
import { API } from '@/services/api-client';
import { mapToOptions } from '@/helpers/checkbox.helpers';
import { MAX_PRICE, MIN_PRICE } from '../constants/filter-price.constants';

const priceRangeDefault = {
  from: MIN_PRICE,
  to: MAX_PRICE
};

const Filter: React.FC<ClassProps> = async ({ className }) => {
  const [doughTypesData, ingredientsData, sizesData] = await Promise.all([
    API.doughType.getAll(),
    API.ingredient.getAll(),
    API.size.getAll()
  ]);

  const doughTypes = mapToOptions(doughTypesData);
  const ingredients = mapToOptions(ingredientsData);
  const sizes = mapToOptions(sizesData);
  return (
    <aside className={cn('sticky top-35 flex h-[calc(100vh-18rem)] max-w-61 flex-col gap-5 pr-2 pb-2', className)}>
      <div className="overflow-y-auto">
        <FilterGroup title="Dough type">
          <CheckboxGroup items={doughTypes} name="doughTypes" />
        </FilterGroup>
        <hr className="mb-6" />
        <FilterGroup title="Price">
          <FilterPrice defaultValue={priceRangeDefault} min={MIN_PRICE} max={MAX_PRICE} step={1} />
        </FilterGroup>
        <hr className="mb-6" />
        <FilterGroup title="Ingredients">
          <CheckboxGroup items={ingredients} name="ingredients" className="pb-1" />
        </FilterGroup>
        <hr className="mb-6" />
        <FilterGroup title="Sizes">
          <CheckboxGroup items={sizes} name="sizes" />
        </FilterGroup>
      </div>
      <Button>Submit</Button>
    </aside>
  );
};

export default Filter;
