import CtaSection from "../components/CtaSection";
import Filter from "../components/Filter";
import Spinner from "../components/Spinner";
import Product from "../features/products/Product";
import Products from "../features/products/Products";
import { useProducts } from "../features/products/useProducts";

const StorePage = () => {
    const { isLoading, products } = useProducts();
    const recommendedProducts = products?.filter(
        (product) =>
            product.name === "Electric Bike" ||
            product.name === "KEMO Controller" ||
            product.name === "Black Hoodie"
    );

    return (
        <div>
            <div className="overflow-hidden relative h-[25rem]">
                <img
                    className="object-cover h-full w-full"
                    src="store-hero.jpg"
                    alt="Luxury Living Room"
                />
                <h1 className="text-9xl tracking-wider font-bold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    Shoptidy
                </h1>
            </div>

            <div className="max-w-container mx-auto">
                <div className="py-16 grid grid-cols-[1fr_3fr]">
                    <div className="flex flex-col gap-8">
                        <div className="sort-container">
                            <h3 className="heading-tertiary mb-2.5">Sort By</h3>
                            <select className="py-2 px-4 rounded-md w-56 bg-transparent border border-darkGray cursor-pointer text-sm">
                                <option className="" value="name-asc">
                                    Name Ascending A-Z
                                </option>
                                <option value="name-desc">Name Descending Z-A</option>
                                <option value="price-desc">Price High - Low</option>
                                <option value="price-asc">Price Low - High</option>
                            </select>
                        </div>

                        <div>
                            <h3 className="heading-tertiary mb-2.5">Category</h3>
                            <Filter
                                filterField="category"
                                options={[
                                    { value: "all", label: "All" },
                                    { value: "clothes", label: "Clothes" },
                                    { value: "outdoor-and-sports", label: "Outdoor & Sports" },
                                    { value: "furniture", label: "Furniture" },
                                    { value: "gaming", label: "Gaming" },
                                    { value: "shoes", label: "Shoes" },
                                    { value: "accessories", label: "Accessories" },
                                ]}
                            />
                        </div>

                        <div>
                            <h3 className="heading-tertiary mb-2.5">Price</h3>
                            <p className="mb-2.5">$44</p>
                            <input type="range" min="0" max="99999" step="5" />
                        </div>
                    </div>

                    <div>
                        <Products />
                    </div>
                </div>

                <section className="py-16 space-y-5">
                    <h2 className="heading-secondary">Explore Our Recommendations</h2>
                    <div className="grid grid-cols-3 gap-10">
                        {/* <Product />
                        <Product />
                        <Product /> */}
                        {isLoading && <Spinner />}
                        {recommendedProducts?.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                </section>

                <CtaSection />
            </div>
        </div>
    );
};

export default StorePage;