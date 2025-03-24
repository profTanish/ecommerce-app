import Product from "./Product";
import Spinner from "../../components/Spinner";
import { useProducts } from "./useProducts";

const Products = () => {
    const { isLoading, products } = useProducts();

    if (isLoading) return <Spinner />;

    return (
        <div className="grid grid-cols-4 gap-4">
            {products?.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;