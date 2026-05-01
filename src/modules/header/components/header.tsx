import LogoButton from '../../../components/logo-button';
import HeaderSearch from './header-search';
import HeaderButtons from './header-buttons';

import type { ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';

const Header = ({ className }: ClassProps) => {
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
