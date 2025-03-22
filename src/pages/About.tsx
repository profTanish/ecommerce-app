import { HiArrowLongDown } from "react-icons/hi2";
import Button from "../components/Button";
import CtaSection from "../components/CtaSection";

const About = () => {
    return (
        <div>
            <section className="py-16 flex flex-col items-center gap-8">
                <h1 className="heading-primary max-w-3xl text-center">
                    Start shopping from the best store on the web
                </h1>
                <p className="max-w-xl text-center">
                    You don't have to be in a certain city to get a great shopping
                    products from the best store in the world.
                </p>
                <Button type="mini" href="#section-numbers">
                    <span className="relative z-10 text-2xl">
                        <HiArrowLongDown />
                    </span>
                </Button>
                <img src="image-group.jpg" alt="About hero" />
            </section>

            <section
                className="py-16 grid grid-cols-1 md:grid-cols-2 gap-16"
                id="section-numbers"
            >
                <div>
                    <img
                        className="rounded-lg w-full max-h-[600px] object-cover"
                        src="/team.jpg"
                        alt="Group of people"
                    />
                </div>
                <div className="space-y-5 mt-8">
                    <h2 className="heading-secondary">Numbers Say It All</h2>
                    <p>
                        Discover why our customers trust us and why we're a leading name in
                        the industry. Our impressive statistics speak volumes about our
                        dedication to quality, customer satisfaction, and unparalleled
                        service.
                    </p>
                    <p>
                        Our team of experts works tirelessly to ensure that every aspect of
                        your shopping experience is seamless and enjoyable. From our
                        user-friendly website to our efficient delivery services, we
                        prioritize your convenience every step of the way.
                    </p>
                    <p>
                        Moreover, we constantly expand our product range and update our
                        offerings to meet the evolving needs of our customers. By staying
                        ahead of industry trends and maintaining rigorous quality standards,
                        we guarantee that you'll find exactly what you're looking for and
                        more.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center py-8">
                        <div className="text-center">
                            <h3 className="heading-tertiary font-bold">10000+</h3>
                            <p>Satisfied Customers</p>
                        </div>

                        <div>
                            <h3 className="heading-tertiary font-bold">98%</h3>
                            <p>Customer Satisfaction Rate</p>
                        </div>

                        <div>
                            <h3 className="heading-tertiary font-bold">5 Years</h3>
                            <p>In Business</p>
                        </div>

                        <div>
                            <h3 className="heading-tertiary font-bold">500,000+</h3>
                            <p>Products Sold</p>
                        </div>
                    </div>
                </div>
            </section>

            <CtaSection />
        </div>
    );
};

export default About;