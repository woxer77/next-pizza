import React from 'react';

import Image from 'next/image';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

const Logo: React.FC<ClassProps> = ({ className }) => {
  return (
    <div className={cn('flex gap-x-4', className)}>
      <Image src="icon.svg" alt="logo" width={42} height={42} />
      <div className="flex flex-col">
        <h1 className="text-2xl font-black uppercase">Next pizza</h1>
        <p className="-mt-1.5 text-neutral-500 lowercase">fast. cheap. tasty.</p>
      </div>
    </div>
  );
};

export default Logo;
