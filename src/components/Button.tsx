import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    type?: string;
    href?: string;
};

const Button = ({ children, type = "default", href = "#" }: ButtonProps) => {
    if (type === "mini")
        return (
            <a href={href} className="button-primary py-3 cursor-pointer">
                {children}
            </a>
        );

    return <button className="button-primary h-[50px] w-40">{children}</button>;
};

export default Button;