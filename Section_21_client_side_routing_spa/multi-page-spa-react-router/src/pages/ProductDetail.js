import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();
  return (
    <>
      <h1> Product Details !</h1>
      <h3>{params.productID}</h3>
    </>
  );
}
export default ProductDetailPage;
