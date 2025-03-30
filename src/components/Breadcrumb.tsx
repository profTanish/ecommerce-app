import {
    Breadcrumb as ShadcnBreadCrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { Link } from "react-router-dom";

type BreadcrumbItem = {
    name: string;
    link?: string;
};

type BreadcrumbProps = {
    items: BreadcrumbItem[];
};

const Breadcrumb = ({ items }: BreadcrumbProps) => {
    if (!items) return null;

    return (
        <ShadcnBreadCrumb>
            <BreadcrumbList>
                {items.map((item, i) => {
                    const isLastItem = items.length === i + 1;

                    return (
                        <React.Fragment key={item?.name}>
                            <BreadcrumbItem>
                                {!isLastItem ? (
                                    <BreadcrumbLink asChild>
                                        <Link to={item?.link || ""}>{item.name}</Link>
                                    </BreadcrumbLink>
                                ) : (
                                    <BreadcrumbPage>{item.name}</BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                            {!isLastItem && <BreadcrumbSeparator />}
                        </React.Fragment>
                    );
                })}
            </BreadcrumbList>
        </ShadcnBreadCrumb>
    );
};

export default Breadcrumb;