import { Suspense } from 'react';
import { TopBar } from '@/modules/topbar/index';
import { FilterServerData } from '@/modules/filter/index';
import { Products } from '@/modules/products/index';
import ProductsSkeleton from '@/ui/products-skeleton';

export const revalidate = 60; // TODO: FOR DEVELOPMENT ONLY
export default function Home() {
  // TODO: FILTER SUSPENSE - TEMPORAL
  return (
    <>
      <TopBar />
      <div className="container mt-10 flex h-full gap-18">
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <FilterServerData className="top-35" />
        {/* </Suspense> */}
        <Suspense fallback={<ProductsSkeleton limit={6} />}>
          <Products />
        </Suspense>
      </div>
    </>
  );
}
