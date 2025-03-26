import Spinner from "../components/Spinner";
 import Product from "./products/Product";
 import { useRecommendedProducts } from "./products/useRecommendedProducts";
 
 const RecommendedProducts = () => {
   const { isLoading, recommendedProducts } = useRecommendedProducts();
   console.log(recommendedProducts);
 
   return (
     <div className="grid grid-cols-3 gap-10">
       {isLoading && <Spinner />}
       {recommendedProducts?.map((product) => (
         <Product key={product.id} product={product} />
       ))}
     </div>
   );
 };
 
 export default RecommendedProducts;