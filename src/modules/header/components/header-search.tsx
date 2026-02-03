'use client';

import React from 'react';

import Search from '@/ui/search';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

const HeaderSearch: React.FC<ClassProps> = ({ className }) => {
  const [inputText, setInputText] = React.useState('');

  function resetInput() {
    if (!inputText.trim()) return;

    setInputText('');
  }

  return (
    <div className={cn('mx-20 w-full', className)}>
      <Search value={inputText} onChange={(e) => setInputText(e.target.value)} onInputReset={resetInput} />
    </div>
  );
};

export default HeaderSearch;
