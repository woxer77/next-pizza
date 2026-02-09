import React from 'react';

import FilterGroup from './filter-group';
import CheckboxGroup from '@/components/checkbox-group';

import { CheckboxOption } from '@/types/global';

interface FilterGroupContainerProps {
  title: string;
  promise: Promise<CheckboxOption[]>;
  name: string;
  checkedValues: Set<string>;
  onCheckedChange: (id: string) => void;
  limit?: number;
  placeholder?: string;
}

const FilterGroupContainer: React.FC<FilterGroupContainerProps> = ({
  title,
  promise,
  name,
  checkedValues,
  onCheckedChange,
  limit,
  placeholder
}) => {
  const items = React.use(promise);

  return (
    <FilterGroup title={title}>
      <CheckboxGroup
        name={name}
        items={items}
        checkedValues={checkedValues}
        onCheckedChange={onCheckedChange}
        className="pb-1"
        limit={limit}
        placeholder={placeholder}
      />
    </FilterGroup>
  );
};

export default FilterGroupContainer;
