import React from 'react';

import Filter from './filter';

import type { ClassProps } from '@/types/global';
import { API } from '@/services/api-client';
import { mapToOptions } from '@/helpers/checkbox.helpers';

const FilterServerData: React.FC<ClassProps> = ({ className }) => {
  const doughTypesPromise = API.doughType.getAll().then(mapToOptions);
  const ingredientsPromise = API.ingredient.getAll().then(mapToOptions);
  const sizesPromise = API.size.getAll().then(mapToOptions);

  return (
    <Filter
      className={className}
      doughTypesPromise={doughTypesPromise}
      ingredientsPromise={ingredientsPromise}
      sizesPromise={sizesPromise}
    />
  );
};

export default FilterServerData;
