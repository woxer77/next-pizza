import React from 'react';

import CheckboxGroup from '@/components/checkbox-group';
import FilterGroup from './filter-group';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';
import FilterPrice from '@/modules/filter/components/filter-price';
import { Button } from '@/ui/button';

const Filter: React.FC<ClassProps> = ({ className }) => {
  const dough = [
    { value: 'traditional', text: 'traditional' },
    { value: 'thin', text: 'thin' }
  ];

  const ingr = [
    { value: 'bacon', text: 'bacon' },
    { value: 'beef', text: 'beef' },
    { value: 'cheese', text: 'cheese' },
    { value: 'ham', text: 'ham' },
    { value: 'ham1', text: 'ham1' },
    { value: 'ham2', text: 'ham2' },
    { value: 'ham3', text: 'ham3' },
    { value: 'ham4', text: 'ham4' },
    { value: 'ham5', text: 'ham5' },
    { value: 'ham6', text: 'ham6' },
    { value: 'ham7', text: 'ham7' },
    { value: 'ham8', text: 'ham8' },
    { value: 'ham9', text: 'ham9' },
    { value: 'ham0', text: 'ham0' },
    { value: 'ham11', text: 'ham11' },
    { value: 'ham12', text: 'ham12' },
    { value: 'ham13', text: 'ham13' },
    { value: 'ham14', text: 'ham14' },
    { value: 'jalapeno', text: 'jalapeno' }
  ];

  const sizes = [
    { value: 'small', text: 'small' },
    { value: 'medium', text: 'medium' },
    { value: 'large', text: 'large' },
    { value: 'extra large', text: 'extra large' }
  ];

  const MIN_PRICE = 0;
  const MAX_PRICE = 50;

  const priceRangeDefault = {
    from: MIN_PRICE,
    to: MAX_PRICE
  };

  return (
    <aside className={cn('sticky top-35 flex h-[calc(100vh-18rem)] max-w-61 flex-col gap-5 pr-2 pb-2', className)}>
      <div className="overflow-y-auto">
        <FilterGroup title="Dough type">
          <CheckboxGroup items={dough} />
        </FilterGroup>
        <hr className="mb-6" />
        <FilterGroup title="Price">
          <FilterPrice defaultValue={priceRangeDefault} min={MIN_PRICE} max={MAX_PRICE} step={1} />
        </FilterGroup>
        <hr className="mb-6" />
        <FilterGroup title="Ingredients">
          <CheckboxGroup items={ingr} className="pb-1" />
        </FilterGroup>
        <hr className="mb-6" />
        <FilterGroup title="Sizes">
          <CheckboxGroup items={sizes} />
        </FilterGroup>
      </div>
      <Button>Submit</Button>
    </aside>
  );
};

export default Filter;
