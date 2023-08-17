import MainNavigation from "../components/MainNavigation";
import { Link } from "react-router-dom";

const data = [
  { id: "p1", title: "product-1" },
  { id: "p2", title: "product-2" },
  { id: "p3", title: "product-3" },
];
function ProductsPage() {
  return (
    <div>
      <MainNavigation />
      <h1>My Products Page</h1>;
      <ul>
        {data.map((prod) => (
          <li key={prod.id}>
            <Link to={`/product/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
