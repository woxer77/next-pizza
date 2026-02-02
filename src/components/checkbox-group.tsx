import React from 'react';

import CheckboxItem from '@/ui/checkbox-item';

import type { ClassProps, CheckboxOption } from '@/types/global';
import { cn } from '@/lib/utils';

interface CheckboxGroupProps extends ClassProps {
  items: CheckboxOption[];
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ className, items }) => {
  return (
    <div className={cn('flex max-h-96 flex-col gap-2 overflow-y-auto pl-1', className)}>
      {items.map(({ value, text }) => (
        <CheckboxItem key={value} id={value} value={value} text={text} />
      ))}
    </div>
  );
};

export default CheckboxGroup;
