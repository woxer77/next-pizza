import React from 'react';

import { Button } from '@/ui/button';
import { User } from 'lucide-react';

import type { ClassProps } from '@/types/global';
import { cn } from '@/helpers/utils';

const ProfileButton: React.FC<ClassProps> = ({ className }) => {
  return (
    <Button className={cn('', className)} variant="outline">
      <User /> Sign In
    </Button>
  );
};

export default ProfileButton;
