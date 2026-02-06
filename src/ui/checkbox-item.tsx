import React from 'react';

import { Checkbox } from './checkbox';
import { Label } from './label';

import type { CheckboxOption, ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

interface CheckboxItemProps extends ClassProps, CheckboxOption {
  name: string;
}

type CheckboxIdType = `checkbox-${string}-${string}`;

const CheckboxItem: React.FC<CheckboxItemProps> = ({ className, value, text, name }) => {
  const checkboxId: CheckboxIdType = `checkbox-${name}-${value}`;

  return (
    <div className={cn('flex w-fit cursor-pointer items-center gap-2 capitalize', className)}>
      <Checkbox id={checkboxId} value={value} className="cursor-pointer" name={name} />
      <Label htmlFor={checkboxId} className="cursor-pointer text-base select-none">
        {text}
      </Label>
    </div>
  );
};

export default CheckboxItem;
