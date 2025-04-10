import Broadcrumb from "../../components/Breadcrumb";
import { useProduct } from "./useProduct";
import ProductCarousel from "@/components/ProductCarousel";
import { useRelatedProducts } from "./useRelatedProducts";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "../cart/cartSlice";
import DeleteCartItem from "../cart/DeleteCartItem";
import { Button } from "@/components/ui/button";
import AddItemToCart from "../cart/AddItemToCart";
import EditCartItemQty from "../cart/EditCartItemQty";
import { capitalizeFirstLetter } from "@/lib/helpers";

const ProductDetails = () => {
    const { isLoading, product } = useProduct();
    const { relatedProducts } = useRelatedProducts(
        product ? product.category : null
    );

    const curQuantity = useSelector(
        getCurrentQuantityById(product ? product.id : 0)
    );

    if (!product) return null;

    const { id, images, description, category, name, price, sku } = product;

    const capitalizedCategoryName = capitalizeFirstLetter(category);

    const isItemInCart = curQuantity > 0;

    return (
        <div className="max-w-container mx-auto py-16 px-8">
            <Broadcrumb
                items={[
                    { name: "Store", link: "/store" },
                    {
                        name: capitalizedCategoryName,
                        link: `/store?category=${category}`,
                    },
                    { name },
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
                    <div className="px-2.5 py-1 bg-green-200 max-w-fit rounded-sm">
                        <h4 className="text-sm font-semibold tracking-wider text-green-600">
                            In Stock
                        </h4>
                    </div>
                    <h2 className="heading-secondary py-8">${price}</h2>

                    <div>
                        <h3 className="heading-tertiary mb-2.5 ">Description:</h3>
                        <p className="text-textGray">{description}</p>
                    </div>

                    <div className="flex items-center gap-2.5 max-w-xs mt-auto justify-between">
                        {isItemInCart ? (
                            <>
                                <EditCartItemQty productId={id} quantity={curQuantity} />

                                <DeleteCartItem productId={id} />
                            </>
                        ) : (
                            <>
                                <AddItemToCart product={product} />


                                <Button className="w-full">Buy Now</Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            {relatedProducts && (
                <div className="py-16">
                    <h2 className="heading-secondary mb-5">Related Products</h2>
                    <ProductCarousel products={relatedProducts} />
                </div>
            )}
        </div>
    );
};

export default ProductDetails;