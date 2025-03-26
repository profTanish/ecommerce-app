import { useSearchParams } from "react-router-dom";

type FilterProps = {
    filterField: string;
    options: Option[];
};

const Filter = ({ filterField, options }: FilterProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const curFilter = searchParams.get(filterField) || options?.at(0)?.value;

    function handleClick(value: string) {
        searchParams.set(filterField, value);
        if (searchParams.get("page")) searchParams.set("page", (1).toString());

        setSearchParams(searchParams);
    }

    return (
        <div className="flex flex-col gap-2.5 items-start">
            {options.map((option) => (
                <button
                    className={`category-button hover:text-darkSlate ${option.value === curFilter ? "text-darkSlate font-bold" : ""
                        }"`}
                    key={option.value}
                    onClick={() => handleClick(option.value)}
                    disabled={option.value === curFilter}
                >
                    {option.label}
                </button>
            ))}
        </div>
    );
};

export default Filter;