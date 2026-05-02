import Home from '@/pages/home/components/home';
import { SearchParams } from '@/types/global';

interface ProductPageProps {
  searchParams: SearchParams;
}

const ProductPage = async ({ searchParams }: ProductPageProps) => {
  const params = await searchParams;

  return <Home params={params} />;
};

export default ProductPage;
