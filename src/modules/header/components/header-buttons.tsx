import React from 'react';

import CartButton from './cart-button';
import ProfileButton from './profile-button';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

const HeaderButtons: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className={cn('flex-center gap-x-4', className)}>
      <ProfileButton />
      <CartButton sum={120} quantity={4} />
    </div>
  );
};

export default HeaderButtons;
