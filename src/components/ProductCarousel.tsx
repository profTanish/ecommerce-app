import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Product from "@/features/products/Product";

type ProductCarouselProps = {
    products: product[];
};

const ProductCarousel = ({ products }: ProductCarouselProps) => {
    return (
        <Carousel>
            <CarouselContent>
                {products.map((product) => (
                    <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/5">
                        <Product product={product} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default ProductCarousel;