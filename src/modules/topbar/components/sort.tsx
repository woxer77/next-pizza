import React from 'react';

import { ArrowUpDown } from 'lucide-react';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/ui/select';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';
import { sortOptions } from '../constants/sort.constants';

const defaultOption = sortOptions[0].value;

const Sort: React.FC<ClassProps> = ({ className }) => {
  return (
    <Select defaultValue={defaultOption}>
      <SelectTrigger
        className={cn(
          'cursor-pointer gap-1 rounded-md border-none bg-neutral-100 px-5 py-2.5 text-base font-semibold lowercase shadow-none',
          '[&_[data-slot=select-value]]:text-red-700',
          'data-[placeholder]:text-foreground',
          className
        )}
        iconClassName="hidden">
        <ArrowUpDown size={16} />
        <p>
          <span className="capitalize">Sort</span> by:
        </p>
        <SelectValue />
      </SelectTrigger>
      <SelectContent position="popper" className="w-auto rounded-md lowercase">
        {sortOptions.map(({ value, name }) => (
          <SelectItem key={value} value={value} className="rounded-sm">
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Sort;
