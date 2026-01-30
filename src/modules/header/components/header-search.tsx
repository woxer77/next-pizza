import React from 'react';

import Search from '@/ui/search';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

const HeaderSearch: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className={cn('mx-20 w-full', className)}>
      <Search />
    </div>
  );
};

export default HeaderSearch;
