import { useSearchParams } from "react-router-dom";

type SortByProps = {
    options: Option[];
};

const SortBy = ({ options }: SortByProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get("sortBy") || "";

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        searchParams.set("sortBy", e.target.value);
        setSearchParams(searchParams);
    }

    return (
        <select
            className="py-2 px-4 rounded-md w-56 bg-transparent border border-darkGray cursor-pointer text-sm"
            value={sortBy}
            onChange={handleChange}
        >
            {options.map((option) => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
    );
};

export default SortBy;