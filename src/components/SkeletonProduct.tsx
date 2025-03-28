import { Skeleton } from "@/components/ui/skeleton";

const SkeletonProduct = () => {
    return (
        <div className="flex flex-col space-y-2.5">
            <Skeleton className="h-[235.5px] w-[235.5px] rounded-lg bg-lightGray" />
            <Skeleton className="h-6 w-[100px] rounded-full bg-lightGray" />
            <Skeleton className="h-8 w-[80px] rounded-full bg-lightGray" />
            <div className="flex gap-2.5">
                <Skeleton className="h-9 w-full rounded-full bg-lightGray" />
                <Skeleton className="h-9 w-full rounded-full bg-lightGray" />
            </div>
        </div>
    );
};

export default SkeletonProduct;