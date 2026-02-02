'use client';

import React from 'react';

import { Slider } from '@/ui/slider';
import { Input } from '@/ui/input';

import type { ClassProps } from '@/types/global';
import type { PriceRange } from '../types/filter.types';
import { cn } from '@/lib/utils';
import useFilterPrice from '../hooks/useFilterPrice';

interface FilterPriceProps extends ClassProps {
  defaultValue?: PriceRange<number>;
  min?: number;
  max: number;
  step: number;
}

const FilterPrice: React.FC<FilterPriceProps> = ({ className, defaultValue, min = 0, max, step }) => {
  const { priceRange, inputValues, minStepsBetweenThumbs, onInputChange, onInputBlur, onSliderChange } =
    useFilterPrice({ defaultValue, min, max });

  return (
    <div className={cn('', className)}>
      <div className="flex-space-between mb-4 flex gap-5">
        <Input
          value={inputValues.from}
          placeholder={String(min)}
          onChange={(e) => onInputChange(e.target.value, 'from')}
          onBlur={(e) => onInputBlur(e.target.value, 'from')}
        />
        <span aria-hidden="true">-</span>
        <Input
          value={inputValues.to}
          placeholder={String(max)}
          onChange={(e) => onInputChange(e.target.value, 'to')}
          onBlur={(e) => onInputBlur(e.target.value, 'to')}
        />
      </div>
      <Slider
        value={[priceRange.from, priceRange.to]}
        minStepsBetweenThumbs={minStepsBetweenThumbs / step}
        onValueChange={onSliderChange}
        min={min}
        max={max}
        step={step}
        className="mx-auto w-full max-w-xs"
      />
    </div>
  );
};

export default FilterPrice;
