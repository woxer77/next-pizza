import React from 'react';

import { InputGroup, InputGroupInput, InputGroupAddon } from '@/ui/input-group';
import { Search as SearchIcon } from 'lucide-react';

import type { ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';
import InputResetButton from './input-reset-button';

interface SearchProps extends ClassProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputReset: () => void;
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({
  className,
  value,
  onChange,
  onInputReset,
  placeholder = 'Search...'
}) => {
  return (
    <InputGroup className={cn('w-full rounded-md', className)}>
      <InputGroupInput value={value} onChange={onChange} placeholder={placeholder} />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputResetButton isActive={!!value} onClick={onInputReset} />
      </InputGroupAddon>
    </InputGroup>
  );
};

export default Search;
