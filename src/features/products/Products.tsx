import Product from "./Product";
import { useProducts } from "./useProducts";
import Pagination from "../../components/Pagination";
import SkeletonProducts from "@/components/SkeletonProducts";

const Products = () => {
    const { isLoading, products, count } = useProducts();

    if (isLoading) return <SkeletonProducts count={8} />;

    if (!products?.length)
        return <p className="text-darkSlate">No products could be found.</p>;

    return (
        <>
            <div className="grid xsBreak:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products?.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
            <Pagination count={count} />
        </>
    );
};

export default Products;