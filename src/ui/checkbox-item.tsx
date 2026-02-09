import React from 'react';

import { Checkbox } from './checkbox';
import { Label } from './label';

import type { CheckboxOption, ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';

interface CheckboxItemProps extends ClassProps, CheckboxOption {
  name: string;
  onCheckedChange: (id: string) => void;
  checked?: boolean;
}

type CheckboxIdType = `checkbox-${string}-${string}`;

const CheckboxItem: React.FC<CheckboxItemProps> = ({
  className,
  value,
  text,
  name,
  checked = false,
  onCheckedChange
}) => {
  const checkboxId: CheckboxIdType = `checkbox-${name}-${value}`;

  return (
    <div className={cn('flex w-fit cursor-pointer items-center gap-2 capitalize', className)}>
      <Checkbox
        id={checkboxId}
        value={value}
        className="cursor-pointer"
        name={name}
        onCheckedChange={() => onCheckedChange(value)}
        checked={checked}
      />
      <Label htmlFor={checkboxId} className="cursor-pointer text-base select-none">
        {text}
      </Label>
    </div>
  );
};

export default CheckboxItem;
