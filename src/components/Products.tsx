import Product from "./Product";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/apiProducts";
import Spinner from "./Spinner";

const Products = () => {
    const {
        isLoading,
        data: products,
        error,
    } = useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });

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