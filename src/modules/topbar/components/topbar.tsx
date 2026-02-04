import React from 'react';

import Tabs from '@/components/tabs/tabs';
import Sort from './sort';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';
import { categories } from '@/constants/category.constants';

const TopBar: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className={cn('bg-background sticky top-0 shadow-lg shadow-neutral-200', className)}>
      <div className="flex-space-between container py-6">
        <Tabs items={categories} />
        <Sort />
      </div>
    </div>
  );
};

export default TopBar;
