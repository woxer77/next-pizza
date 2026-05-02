import ProductDialog from '@/components/product-dialog';

interface ProductDialogInterceptorProps {
  params: {
    id: string;
  };
}

const ProductDialogInterceptor = async ({ params }: ProductDialogInterceptorProps) => {
  const { id } = await params;

  return <ProductDialog id={id} />;
};

export default ProductDialogInterceptor;
