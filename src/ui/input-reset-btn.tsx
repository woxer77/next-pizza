import React from 'react';

import { X } from 'lucide-react';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

interface InputResetButtonProps extends ClassProps {
  onClick: () => void;
  isActive: boolean;
}

const InputResetButton: React.FC<InputResetButtonProps> = ({ className, onClick, isActive }) => {
  return (
    <button
      aria-label="Clear input"
      onClick={onClick}
      disabled={!isActive}
      className={cn(
        'h-5 w-5 cursor-pointer transition-opacity',
        isActive ? 'visible opacity-100' : 'invisible opacity-0',
        className
      )}>
      <X className="h-full w-full" />
    </button>
  );
};

export default InputResetButton;
