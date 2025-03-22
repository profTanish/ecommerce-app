import React from "react";

type ButtonProps = {
    children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
    return (
        <button className="text-red rounded-full hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-darkSlate bg-white px-3 text-darkSlate shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-darkSlate before:transition-all before:duration-500 hover:text-white hover:shadow-darkSlate hover:before:left-0 hover:before:w-full">
            {children}
        </button>
    );
};

export default Button;