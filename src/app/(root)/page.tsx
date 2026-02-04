import { Header } from '@/modules/header/index';
import { TopBar } from '@/modules/topbar/index';
import { Filter } from '@/modules/filter/index';
import { Products } from '@/modules/products/index';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="h-[2000px]">
        <TopBar />
        <div className="container mt-10 flex h-full gap-18">
          <Filter />
          <Products />
        </div>
      </div>
    </div>
  );
}
