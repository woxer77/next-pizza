import React from 'react';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

interface TabProps extends ClassProps, React.ComponentProps<'button'> {
  isActive: boolean;
  text: string;
}

const Tab: React.FC<TabProps> = ({ className, onClick, ref, isActive, text }) => {
  return (
    <button
      onClick={onClick}
      ref={ref}
      className={cn('flex-center cursor-pointer rounded-xl px-5 py-2.5', className)}>
      <p
        className={cn(
          'z-1 font-semibold capitalize transition-colors duration-300 select-none',
          isActive && 'text-red-700'
        )}>
        {text}
      </p>
    </button>
  );
};

export default Tab;
