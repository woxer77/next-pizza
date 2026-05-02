import { Suspense } from 'react';
import { FilterServerData } from '@/modules/filter';
import { Products } from '@/modules/products';
import TopBar from '@/modules/topbar/components/topbar';
import ProductsSkeleton from '@/ui/products-skeleton';

import { SearchParams } from '@/types/global';

interface HomePageProps {
  params?: Awaited<SearchParams>;
}

const HomePage = ({ params }: HomePageProps) => {
  return (
    <>
      <TopBar />
      <div className="container mt-10 flex h-full gap-18">
        <FilterServerData className="top-35" searchParams={params} />
        <Suspense fallback={<ProductsSkeleton limit={6} />}>
          <Products />
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;
