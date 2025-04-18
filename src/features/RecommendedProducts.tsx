import Spinner from "../components/Spinner";
 import Product from "./products/Product";
 import { useRecommendedProducts } from "./products/useRecommendedProducts";
 
 const RecommendedProducts = () => {
   const { isLoading, recommendedProducts } = useRecommendedProducts();
 
   return (
     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
       {isLoading && <Spinner />}
       {recommendedProducts?.map((product) => (
         <Product key={product.id} product={product} />
       ))}
     </div>
   );
 };
 
 export default RecommendedProducts;