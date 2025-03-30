import Broadcrumb from "../components/Breadcrumb";

const ProductDetails = () => {
    return (
        <div>
            <Broadcrumb
                items={[
                    { name: "Store", link: "/store" },
                    { name: "Clothes", link: "/store/clothes" },
                    { name: "Black Hoodie", link: "" },
                ]}
            />
        </div>
    );
};

export default ProductDetails;