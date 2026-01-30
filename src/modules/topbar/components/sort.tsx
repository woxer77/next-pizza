import React from 'react';

import { ArrowUpDown } from 'lucide-react';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

const Sort: React.FC<ClassProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'flex cursor-pointer items-center gap-x-1 rounded-xl bg-neutral-100 p-3.5 px-5 font-semibold',
        className
      )}>
      <ArrowUpDown size={16} />
      Sort by: <p className="text-red-700">popular</p>
    </div>
  );
};

export default Sort;
