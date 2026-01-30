import React from 'react';

import LogoButton from '../../../components/logo-button';
import HeaderSearch from './header-search';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';
import HeaderButtons from './header-buttons';

const Header: React.FC<ClassProps> = ({ className }) => {
  return (
    <header className={cn('border-b border-neutral-300', className)}>
      <div className="container flex items-center py-10">
        <LogoButton />
        <HeaderSearch />
        <HeaderButtons />
      </div>
    </header>
  );
};

export default Header;
