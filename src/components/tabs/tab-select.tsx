import React from 'react';

import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/ui/select';

import type { ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';
import { TabsItem } from './types/tabs.types';

interface TabSelectProps extends ClassProps {
  items: TabsItem[];
  value: string | undefined;
  onValueChange: (value: string) => void;
  ref: React.Ref<HTMLButtonElement>;
  isActive: boolean;
}

const TabSelect: React.FC<TabSelectProps> = ({ className, items, value, onValueChange, ref, isActive }) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger
        className={cn(
          'data-[placeholder]:text-foreground z-1 max-w-48 cursor-pointer rounded-md border-none px-5 py-2.5 text-base font-semibold capitalize shadow-none',
          isActive && 'text-red-700',
          className
        )}
        iconClassName="opacity-100 size-5"
        ref={ref}>
        <SelectValue placeholder="Other" />
      </SelectTrigger>
      <SelectContent position="popper" className="w-auto rounded-md capitalize">
        {items.map(({ id, name }) => (
          <SelectItem key={id} value={id.toString()} className="rounded-sm">
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default TabSelect;
