import React from 'react';

import Logo from '@/ui/logo';
import Link from 'next/link';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';
import { ROUTES } from '@/constants/routes';

const LogoButton: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className={cn('w-fit shrink-0', className)}>
      <Link href={ROUTES.HOME}>
        <Logo />
      </Link>
    </div>
  );
};

export default LogoButton;
