import { SearchParams } from '@/types/global';
import HomePage from '@/pages/home/components/home-page';

interface HomeRouteProps {
  searchParams: SearchParams;
}

export const revalidate = 60; // TODO: FOR DEVELOPMENT ONLY
const HomeRoute = async ({ searchParams }: HomeRouteProps) => {
  const params = await searchParams;

  return <HomePage params={params} />;
};

export default HomeRoute;
