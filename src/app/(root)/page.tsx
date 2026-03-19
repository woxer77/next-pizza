import { Suspense } from 'react';
import { TopBar } from '@/modules/topbar/index';
import { FilterServerData } from '@/modules/filter/index';
import { Products } from '@/modules/products/index';
import ProductsSkeleton from '@/ui/products-skeleton';
import { SearchParams } from '@/types/global';

interface HomePageProps {
  searchParams: SearchParams;
}

export const revalidate = 60; // TODO: FOR DEVELOPMENT ONLY
export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;

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
}
