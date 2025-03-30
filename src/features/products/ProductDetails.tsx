import Broadcrumb from "../../components/Breadcrumb";

const ProductDetails = () => {
    return (
        <div className="max-w-container mx-auto">
            <Broadcrumb
                items={[
                    { name: "Store", link: "/store" },
                    { name: "Clothes", link: "/store/clothes" },
                    { name: "Black Hoodie" },
                ]}
            />
            <div>
                <div className="rounded-xl bg-lightGray"></div>
            </div>
        </div>
    );
};

export default ProductDetails;