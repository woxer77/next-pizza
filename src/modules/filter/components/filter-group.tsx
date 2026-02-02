import React from 'react';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

interface FilterGroupProps extends ClassProps {
  children: React.ReactNode;
  title?: string;
}

const FilterGroup: React.FC<FilterGroupProps> = ({ className, children, title }) => {
  return (
    <section className={cn('mb-6', className)}>
      {title && <h3 className="mb-4 pl-1 text-lg font-bold">{title}</h3>}
      <div className="pr-1 pl-1">{children}</div>
    </section>
  );
};

export default FilterGroup;
