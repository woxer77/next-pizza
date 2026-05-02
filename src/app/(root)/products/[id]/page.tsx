import ProductPage from '@/pages/product/components/product-page';

interface ProductRouteProps {
  params: {
    id: string;
  };
}

const ProductRoute = async ({ params }: ProductRouteProps) => {
  const { id } = await params;

  return <ProductPage id={id} />;
};

export default ProductRoute;
