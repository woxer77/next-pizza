import React from 'react';

import FilterGroupTitle from './filter-group-title';

import type { ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';

interface FilterGroupProps extends ClassProps {
  children: React.ReactNode;
  title?: string;
}

const FilterGroup = ({ className, children, title }: FilterGroupProps) => {
  return (
    <section className={cn('', className)}>
      {title && <FilterGroupTitle title={title} />}
      <div className="pr-1">{children}</div>
    </section>
  );
};

export default FilterGroup;
