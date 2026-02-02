import { Header } from '@/modules/header/index';
import { TopBar } from '@/modules/topbar/index';
import { Filter } from '@/modules/filter/index';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="h-[2000px]">
        <TopBar />
        <div className="container mt-10 h-full">
          <Filter />
        </div>
      </div>
    </div>
  );
}
