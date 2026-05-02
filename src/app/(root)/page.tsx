import { SearchParams } from '@/types/global';
import Home from '@/pages/home/components/home';

interface HomePageProps {
  searchParams: SearchParams;
}

export const revalidate = 60; // TODO: FOR DEVELOPMENT ONLY
const HomePage = async ({ searchParams }: HomePageProps) => {
  const params = await searchParams;

  return <Home params={params} />;
};

export default HomePage;
