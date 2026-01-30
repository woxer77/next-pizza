import React from 'react';

import type { ClassProps } from '@/types/global';
import { cn } from '@/lib/utils';

const Sort: React.FC<ClassProps> = ({ className }) => {
  return <div className={cn('', className)}>sort</div>;
};

export default Sort;
