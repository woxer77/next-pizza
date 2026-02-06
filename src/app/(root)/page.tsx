import { Suspense } from 'react';
import { Header } from '@/modules/header/index';
import { TopBar } from '@/modules/topbar/index';
import { Filter } from '@/modules/filter/index';
import { Products } from '@/modules/products/index';
import ProductsSkeleton from '@/ui/products-skeleton';

export default function Home() {
  return (
    <div>
      <Header />
      <TopBar />
      <div className="container mt-10 flex h-full gap-18">
        <Filter />
        <Suspense fallback={<ProductsSkeleton limit={6} />}>
          <Products />
        </Suspense>
      </div>
    </div>
  );
}
