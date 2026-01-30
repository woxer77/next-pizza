import { Header } from '@/modules/header/index';
import { TopBar } from '@/modules/topbar/index';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="h-[2000px]">
        <TopBar />
      </div>
    </div>
  );
}
