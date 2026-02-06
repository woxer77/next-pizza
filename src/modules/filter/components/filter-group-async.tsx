import React from 'react';

import FilterGroup from './filter-group';
import CheckboxGroup from '@/components/checkbox-group';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';
import { mapToOptions } from '@/helpers/checkbox.helpers';

interface FilterGroupAsyncProps extends ClassProps {
  callback: () => Promise<{ id: number | string; name: string }[]>;
  title: string;
  name: string;
}

const FilterGroupAsync: React.FC<FilterGroupAsyncProps> = async ({ className, callback, title, name }) => {
  const items = mapToOptions(await callback());

  return (
    <div className={cn('', className)}>
      <FilterGroup title={title}>
        <CheckboxGroup items={items} name={name} className="pb-1" />
      </FilterGroup>
    </div>
  );
};

export default FilterGroupAsync;
