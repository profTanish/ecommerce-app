import Broadcrumb from "../../components/Breadcrumb";
import { useProduct } from "./useProduct";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import ProductCarousel from "@/components/ProductCarousel";
import { useRecommendedProducts } from "./useRecommendedProducts";

const ProductDetails = () => {
    const { isLoading, product } = useProduct();
    console.log(isLoading, product);
    const { recommendedProducts } = useRecommendedProducts();

    if (!product) return null;

    const { images, description, category, name, price, sku } = product;

    return (
        <div className="max-w-container mx-auto py-16 px-8">
            <Broadcrumb
                items={[
                    { name: "Store", link: "/store" },
                    { name: "Clothes", link: "/store/clothes" },
                    { name: "Black Hoodie" },
                ]}
            />
            <div className="grid grid-cols-2 gap-12 py-8">
                <div className="rounded-xl overflow-hidden">
                    <img src={images?.at(0)} alt="product showcase" />
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center justify-between text-textGray text-sm uppercase">
                        <h4>{category}</h4>
                        <p>{sku}</p>
                    </div>
                    <h3 className="heading-secondary py-2.5">{name}</h3>
                    <div className="flex items-center gap-3">
                        <div className="rounded-full w-2.5 h-2.5 bg-green-500"></div>
                        <h4 className="uppercase text-sm font-semibold tracking-wider">
                            AVAILABLE
                        </h4>
                    </div>
                    <h2 className="heading-secondary py-8">${price}</h2>

                    <div>
                        <h3 className="heading-tertiary mb-2.5 ">Description:</h3>
                        <p className="text-textGray">{description}</p>
                    </div>

                    <div className="flex gap-2.5 max-w-xs mt-auto">
                        <button className="text-2xl p-3 border border-darkGray rounded-full transition-all duration-300 hover:bg-darkGray">
                            <HiOutlineShoppingCart />
                        </button>

                        <button className="text-sm py-3 text-white bg-darkSlate rounded-full w-full border border-darkSlate transition-all duration-300 hover:bg-black hover:border-black">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
            {recommendedProducts && (
                <div className="py-16">
                    <h2 className="heading-secondary mb-5">Related Products</h2>
                    <ProductCarousel products={recommendedProducts} />
                </div>
            )}
        </div>
    );
};

export default ProductDetails;