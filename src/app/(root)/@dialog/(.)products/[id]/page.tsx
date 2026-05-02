import ProductDialog from '@/components/product-dialog';

interface DialogPageProps {
  params: {
    id: string;
  };
}

const DialogPage = async ({ params }: DialogPageProps) => {
  const { id } = await params;

  return <ProductDialog id={id} />;
};

export default DialogPage;
