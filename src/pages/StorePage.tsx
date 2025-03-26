import CtaSection from "../components/CtaSection";
import Filter from "../components/Filter";
import SortBy from "../components/SortBy";
import RecommendedProducts from "../features/RecommendedProducts";
import Products from "../features/products/Products";

const StorePage = () => {
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
                            <SortBy
                                options={[
                                    { value: "name-asc", label: "Name Ascending A-Z" },
                                    { value: "name-desc", label: "Name Descending Z-A" },
                                    { value: "price-asc", label: "Price Low - High" },
                                    { value: "price-desc", label: "Price High - Low" },
                                ]}
                            />
                        </div>

                        <div>
                            <h3 className="heading-tertiary mb-2.5">Category</h3>
                            <Filter
                                filterField="category"
                                options={[
                                    { value: "all", label: "All" },
                                    { value: "clothes", label: "Clothes" },
                                    { value: "outdoor-&-sports", label: "Outdoor & Sports" },
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
                    <RecommendedProducts />
                </section>

                <CtaSection />
            </div>
        </div>
    );
};

export default StorePage;