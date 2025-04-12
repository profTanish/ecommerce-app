import { Skeleton } from "@/components/ui/skeleton";

const SkeletonProduct = () => {
    return (
        <div className="flex flex-col space-y-2.5">
            <Skeleton className="h-[235.5px] w-[235.5px] rounded-lg bg-darkGray" />
            <Skeleton className="h-6 w-[100px] rounded-full bg-darkGray" />
            <Skeleton className="h-8 w-[80px] rounded-full bg-darkGray" />
            <div className="flex gap-2.5">
                <Skeleton className="h-9 w-full rounded-full bg-darkGray" />
                <Skeleton className="h-9 w-full rounded-full bg-darkGray" />
            </div>
        </div>
    );
};

export default SkeletonProduct;