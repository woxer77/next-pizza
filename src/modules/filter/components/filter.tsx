import React, { Suspense } from 'react';

import FilterGroup from './filter-group';
import { Button } from '@/ui/button';
import FilterPrice from './filter-price';
import FilterGroupAsync from './filter-group-async';
import FilterGroupSkeleton from './filter-group-skeleton';

import type { ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';
import { API } from '@/services/api-client';
import { MAX_PRICE, MIN_PRICE } from '../constants/filter-price.constants';

const priceRangeDefault = {
  from: MIN_PRICE,
  to: MAX_PRICE
};

const Filter: React.FC<ClassProps> = async ({ className }) => {
  return (
    <aside className={cn('sticky top-2 flex h-[calc(100vh-18rem)] w-61 shrink-0 flex-col gap-5 pb-2', className)}>
      <div className="overflow-y-auto pr-2">
        <Suspense fallback={<FilterGroupSkeleton title="Dough type" limit={2} />}>
          <FilterGroupAsync callback={API.doughType.getAll} name="doughTypes" title="Dough type" />
        </Suspense>
        <hr className="my-6" />
        <FilterGroup title="Price">
          <FilterPrice defaultValue={priceRangeDefault} min={MIN_PRICE} max={MAX_PRICE} step={1} />
        </FilterGroup>
        <hr className="my-6" />
        <Suspense fallback={<FilterGroupSkeleton title="Ingredients" />}>
          <FilterGroupAsync callback={API.ingredient.getAll} name="ingredients" title="Ingredients" />
        </Suspense>
        <hr className="my-6" />
        <Suspense fallback={<FilterGroupSkeleton title="Sizes" limit={4} />}>
          <FilterGroupAsync callback={API.size.getAll} name="sizes" title="Sizes" />
        </Suspense>
      </div>
      <Button>Submit</Button>
    </aside>
  );
};

export default Filter;
