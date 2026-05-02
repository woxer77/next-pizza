interface ProductPageProps {
  id: string;
}

const ProductPage = ({ id }: ProductPageProps) => {
  return (
    <div>
      <h1>Product Page #{id}</h1>
      <p>This is the product page.</p>
    </div>
  );
};

export default ProductPage;
