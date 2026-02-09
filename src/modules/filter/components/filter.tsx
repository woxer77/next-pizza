import React from 'react';

import FilterClient from './filter-client';

import type { ClassProps } from '@/types/global';
import { API } from '@/services/api-client';
import { mapToOptions } from '@/helpers/checkbox.helpers';

const Filter: React.FC<ClassProps> = ({ className }) => {
  const doughTypesPromise = API.doughType.getAll().then(mapToOptions);
  const ingredientsPromise = API.ingredient.getAll().then(mapToOptions);
  const sizesPromise = API.size.getAll().then(mapToOptions);

  return (
    <FilterClient
      className={className}
      doughTypesPromise={doughTypesPromise}
      ingredientsPromise={ingredientsPromise}
      sizesPromise={sizesPromise}
    />
  );
};

export default Filter;
