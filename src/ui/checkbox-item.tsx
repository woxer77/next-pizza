import React from 'react';

import { Checkbox } from './checkbox';
import { Label } from './label';

import type { CheckboxOption, ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

interface CheckboxItemProps extends ClassProps, CheckboxOption {
  id: string;
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({ className, value, text, id }) => {
  return (
    <div className={cn('flex w-fit cursor-pointer items-center gap-2 capitalize', className)}>
      <Checkbox id={id} value={value} className="cursor-pointer" />
      <Label htmlFor={id} className="cursor-pointer text-base select-none">
        {text}
      </Label>
    </div>
  );
};

export default CheckboxItem;
