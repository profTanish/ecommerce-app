import SkeletonProduct from "./SkeletonProduct";

type SkeletonProductsProps = {
    count: number;
};

const SkeletonProducts = ({ count }: SkeletonProductsProps) => {
    return (
        <div className="grid grid-cols-4 gap-4">
            {Array.from({ length: count }).map((_, i) => (
                <SkeletonProduct key={i} />
            ))}
        </div>
    );
};

export default SkeletonProducts;