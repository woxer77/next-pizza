import React from 'react';

import Tabs from '@/components/tabs/tabs';
import Sort from './sort';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';
import { categoryService } from '@/services/category/category.service';

const TopBar: React.FC<ClassProps> = async ({ className }) => {
  const categories = await categoryService.getAll();

  return (
    <div className={cn('bg-background sticky top-0 z-5 shadow-lg shadow-neutral-200', className)}>
      <div className="flex-space-between container py-6">
        <Tabs items={categories} />
        <Sort />
      </div>
    </div>
  );
};

export default TopBar;
