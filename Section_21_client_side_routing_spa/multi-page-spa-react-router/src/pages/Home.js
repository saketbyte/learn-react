import { Link } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <h3>
        <Link to="product">Products</Link>
      </h3>
    </div>
  );
}

export default HomePage;
