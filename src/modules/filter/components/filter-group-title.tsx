import React from 'react';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

interface FilterGroupTitleProps extends ClassProps {
  title: string;
}

const FilterGroupTitle: React.FC<FilterGroupTitleProps> = ({ className, title }) => {
  return <h3 className={cn('mb-4 pl-1 text-lg font-bold', className)}>{title}</h3>;
};

export default FilterGroupTitle;
