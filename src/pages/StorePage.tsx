import CtaSection from "../components/CtaSection";
import Product from "../components/Product";

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
                            <ul className="flex flex-col gap-2.5 items-start">
                                {[
                                    "all",
                                    "clothes",
                                    "electronics",
                                    "furniture",
                                    "shoes",
                                    "miscellaneous",
                                    "others",
                                ].map((category) => (
                                    <li key={category}>
                                        <button
                                            className="category-button hover:text-darkSlate"
                                            value={category}
                                        >
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="heading-tertiary mb-2.5">Price</h3>
                            <p className="mb-2.5">$44</p>
                            <input type="range" min="0" max="99999" step="5" />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>

                <section className="py-16 space-y-5">
                    <h2 className="heading-secondary">Related Products</h2>
                    <div className="grid grid-cols-3 gap-10">
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </section>

                <CtaSection />
            </div>
        </div>
    );
};

export default StorePage;