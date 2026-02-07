import React from 'react';

import type { ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';

interface TabProps extends ClassProps, React.ComponentProps<'button'> {
  isActive: boolean;
  text: string;
}

const Tab: React.FC<TabProps> = ({ className, onClick, ref, isActive, text }) => {
  return (
    <button
      onClick={onClick}
      ref={ref}
      className={cn(
        'flex-center focus-visible:border-ring focus-visible:ring-ring/50 cursor-pointer rounded-md px-5 py-2.5 !outline-none focus-visible:ring-[3px]',
        className
      )}>
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
