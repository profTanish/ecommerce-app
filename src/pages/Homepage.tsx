import {
  HiOutlineArrowUturnLeft,
  HiOutlineShieldCheck,
  HiOutlineTruck,
} from "react-icons/hi2";
import Feature from "../components/Feature";
import Button from "../components/Button";
import CtaSection from "../components/CtaSection";

const Homepage = () => {
  return (
    <div className="max-w-container mx-auto px-5">
      <section className="grid lg:grid-cols-2 items-center justify-between gap-16 pb-16">
        <div className="max-w-screen-sm space-y-5">
          <h1 className="heading-primary">
            Bring your shopping to the next{" "}
            <span className="text-slateTeal">LEVEL.</span>
          </h1>
          <p className="max-w-[80%]">
            Lorem ipsum dolor sit amet consectetur. Non egestas id proin aliquam
            pellentesque congue. Vel consectetur turpis a aliquam. Nisi maecenas
            elementum interdum arcu.
          </p>
          <div className="max-w-52">
            <Button >
              <span className="relative z-10">Start Exploring</span>
            </Button>
          </div>
        </div>
        <div>
          <img loading="lazy" src="/hero-min.jpg" alt="hero" />
        </div>
      </section>

      <section className="text-center py-16">
        <h4 className="heading-quaternary mb-5">Get Introduced</h4>
        <div className="max-w-5xl mx-auto text-4xl sm:5xl lg:text-6xl font-thin leading-[50px] sm:leading-[60px] lg:leading-[80px] text-darkSlate">
          Shop confidently with
          <a className="bg-[url(bike.jpg)] image-mini"></a>
          our online store, where we prioritize saving your time, easing{" "}
          <a className="bg-[url(/sofa.jpeg)] image-mini"></a> your stress, and
          ensuring you get the best value for your money.
        </div>
      </section>

      <section className="grid lg:grid-cols-2 items-center gap-10 mx-auto py-16">
        <div>
          <h4 className="heading-quaternary mb-5">What We Offer</h4>
          <h2 className="heading-secondary text-darkSlate mb-6">
            Experience Unmatched Shopping Convenience
          </h2>
          <p className="mb-8 max-w-xl">
            Discover a seamless shopping experience with our top-notch services
            and products. We are dedicated to bringing you the best value for
            your money, making shopping easier and more enjoyable.
          </p>
          <div className="space-y-8">
            <Feature
              icon={HiOutlineTruck}
              title="Free Shipping"
              description="Enjoy free shipping on all orders over $50."
            />

            <Feature
              icon={HiOutlineShieldCheck}
              title="24/7 Support"
              description="Our support team is here to help you any time of the day."
            />

            <Feature
              icon={HiOutlineArrowUturnLeft}
              title="Easy Returns"
              description="Hassle-free returns within 30 days of purchase."
            />
          </div>
        </div>
        <div>
          <img
            loading="lazy"
            src="/person-buying-online.jpg"
            alt="Shopping Experience"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default Homepage;