import React from 'react';

import Tabs from '@/components/tabs/tabs';

import { categoryService } from '@/services/category/category.service';

const TopBarTabs: React.FC = async () => {
  const categories = await categoryService.getAll();

  return <Tabs items={categories} />;
};

export default TopBarTabs;
