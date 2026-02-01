import React from 'react';

import { InputGroup, InputGroupInput, InputGroupAddon } from '@/ui/input-group';
import { Search as SearchIcon } from 'lucide-react';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

const Search: React.FC<ClassProps> = ({ className }) => {
  return (
    <InputGroup className={cn('w-full rounded-md', className)}>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
    </InputGroup>
  );
};

export default Search;
