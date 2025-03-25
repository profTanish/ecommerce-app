import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Navigate, useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";

type PaginationType = {
    count: number | null;
};

const Pagination = ({ count }: PaginationType) => {
    if (!count) return;
    
    const [searchParams, setSearchParams] = useSearchParams();
    const curPage = !searchParams.get("page")
        ? 1
        : Number(searchParams.get("page"));

    const pageCount = Math.ceil(count / PAGE_SIZE);

    if (curPage < 1 || curPage > pageCount) {
        return <Navigate to={`/404`} />;
    }

    function handleNextPage() {
        const next = curPage === pageCount ? curPage : curPage + 1;

        searchParams.set("page", next.toString());
        setSearchParams(searchParams);
    }
    function handlePrevPage() {
        const prev = curPage === 1 ? curPage : curPage - 1;

        searchParams.set("page", prev.toString());
        setSearchParams(searchParams);
    }

    if (pageCount <= 1) return null;

    return (
        <div className="flex items-center justify-between mt-5">
            <button
                className="button-pagination"
                onClick={handlePrevPage}
                disabled={curPage === 1}
            >
                <HiChevronLeft /> <span>Previous</span>
            </button>

            <p>
                Showing <strong>{(curPage - 1) * PAGE_SIZE + 1}</strong> to{" "}
                <strong>{curPage === pageCount ? count : curPage * PAGE_SIZE}</strong>{" "}
                of <strong>{count}</strong> results.
            </p>

            <button
                className="button-pagination"
                onClick={handleNextPage}
                disabled={curPage === pageCount}
            >
                <span>Next</span>
                <HiChevronRight />
            </button>
        </div>
    );
};

export default Pagination;