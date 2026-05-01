import Filter from './filter';

import type { ClassProps, SearchParams } from '@/types/global';
import { API } from '@/services/api-client';
import { mapToOptions } from '@/helpers/checkbox.helpers';

interface FilterServerDataProps extends ClassProps {
  searchParams: Awaited<SearchParams>;
}

const FilterServerData = ({ className, searchParams }: FilterServerDataProps) => {
  const doughTypesPromise = API.doughType.getAll().then(mapToOptions);
  const ingredientsPromise = API.ingredient.getAll().then(mapToOptions);
  const sizesPromise = API.size.getAll().then(mapToOptions);

  return (
    <Filter
      className={className}
      doughTypesPromise={doughTypesPromise}
      ingredientsPromise={ingredientsPromise}
      sizesPromise={sizesPromise}
      searchParams={searchParams}
    />
  );
};

export default FilterServerData;
