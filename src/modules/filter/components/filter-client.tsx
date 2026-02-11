'use client';

import React, { Suspense } from 'react';

import FilterGroup from './filter-group';
import { Button } from '@/ui/button';
import FilterPrice from './filter-price';
import FilterGroupSkeleton from './filter-group-skeleton';
import FilterGroupContainer from './filter-group-container';

import type { ClassProps, CheckboxOption } from '@/types/global';
import { cn } from '@/helpers/utils';
import { MAX_PRICE, MIN_PRICE } from '../constants/filter-price.constants';
import useSet from '../hooks/useSet';
import { useRouter } from 'next/navigation';
import qs from 'qs';
import { PARAMS } from '@/constants/query-params.constants';
import useFilterParams from '../hooks/useFilterParams';

interface FilterClientProps extends ClassProps {
  doughTypesPromise: Promise<CheckboxOption[]>;
  ingredientsPromise: Promise<CheckboxOption[]>;
  sizesPromise: Promise<CheckboxOption[]>;
}

const FilterClient: React.FC<FilterClientProps> = ({
  className,
  doughTypesPromise,
  ingredientsPromise,
  sizesPromise
}) => {
  const router = useRouter();
  const { params, defaultFilterParams } = useFilterParams();

  const doughTypesSet = useSet(defaultFilterParams.doughTypes);
  const ingredientsSet = useSet(defaultFilterParams.ingredients);
  const sizesSet = useSet(defaultFilterParams.sizes);
  const priceFrom = params.get(PARAMS.PRICE_FROM);
  const priceTo = params.get(PARAMS.PRICE_TO);

  const defaultPriceRange = {
    // TODO: BUG! add validation from URL
    from: Number(priceFrom ?? MIN_PRICE),
    to: Number(priceTo ?? MAX_PRICE)
  };

  React.useEffect(() => {
    const filters = {
      doughTypes: Array.from(doughTypesSet.values),
      ingredients: Array.from(ingredientsSet.values),
      sizes: Array.from(sizesSet.values),
      priceFrom: priceFrom || undefined,
      priceTo: priceTo || undefined
    };

    const query = qs.stringify(filters, { arrayFormat: 'comma' });

    router.push(`?${query}`, { scroll: false });
  }, [doughTypesSet.values, ingredientsSet.values, sizesSet.values]);

  return (
    <aside className={cn('sticky top-2 flex h-[calc(100vh-18rem)] w-61 shrink-0 flex-col gap-5 pb-2', className)}>
      <div className="overflow-y-auto pr-2">
        <Suspense fallback={<FilterGroupSkeleton title="Dough type" limit={2} />}>
          <FilterGroupContainer
            title="Dough type"
            name="doughTypes"
            promise={doughTypesPromise}
            checkedValues={doughTypesSet.values}
            onCheckedChange={doughTypesSet.toggle}
          />
        </Suspense>

        <hr className="my-6" />

        <FilterGroup title="Price">
          <FilterPrice defaultValue={defaultPriceRange} min={MIN_PRICE} max={MAX_PRICE} step={1} />
        </FilterGroup>

        <hr className="my-6" />

        <Suspense fallback={<FilterGroupSkeleton title="Ingredients" />}>
          <FilterGroupContainer
            title="Ingredients"
            name="ingredients"
            promise={ingredientsPromise}
            checkedValues={ingredientsSet.values}
            onCheckedChange={ingredientsSet.toggle}
            limit={5}
            placeholder="Search..."
          />
        </Suspense>

        <hr className="my-6" />

        <Suspense fallback={<FilterGroupSkeleton title="Sizes" limit={4} />}>
          <FilterGroupContainer
            title="Sizes"
            name="sizes"
            promise={sizesPromise}
            checkedValues={sizesSet.values}
            onCheckedChange={sizesSet.toggle}
          />
        </Suspense>
      </div>
      <Button>Submit</Button>
    </aside>
  );
};

export default FilterClient;
