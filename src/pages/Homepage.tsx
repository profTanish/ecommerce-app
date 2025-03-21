import {
  HiOutlineArrowUturnLeft,
  HiOutlineShieldCheck,
  HiOutlineTruck,
} from "react-icons/hi2";

const Homepage = () => {
    return (
      <div>
        <section className="flex items-center justify-between gap-16 pb-16">
          <div className="max-w-screen-sm space-y-5">
            <h1 className="text-6xl font-black">
              Bring your shopping to the next{" "}
              <span className="text-slateTeal">LEVEL.</span>
            </h1>
            <p className="text-textGray max-w-[80%]">
              Lorem ipsum dolor sit amet consectetur. Non egestas id proin aliquam
              pellentesque congue. Vel consectetur turpis a aliquam. Nisi maecenas
              elementum interdum arcu nunc ullamcorper pharetra suspendisse.
              Scelerisque dolor magna dolor libero iaculis.
            </p>
            <div className="max-w-52">
              <button className="bg-darkSlate text-white py-2.5 rounded-full w-full hover:rounded-md transition-all duration-500">
                Explore Products
              </button>
            </div>
          </div>
          <div>
            <img src="/hero-min.jpg" alt="hero" />
          </div>
        </section>
  
        <section className="text-center py-16">
          <h4 className="text-lg font-medium uppercase text-textGray">
            Get Introduced
          </h4>
          <div className="max-w-5xl mx-auto text-6xl font-thin leading-[80px]">
            Shop confidently with
            <a
              style={{
                transition:
                  "border-radius 400ms cubic-bezier(.25, .46, .45, .94), border-color 400ms cubic-bezier(.25, .46, .45, .94)",
              }}
              className="bg-[url(/bike.jpg)] image-mini"
            ></a>
            our online store, where we prioritize saving your time, easing{" "}
            <a
              style={{
                transition:
                  "border-radius 400ms cubic-bezier(.25, .46, .45, .94), border-color 400ms cubic-bezier(.25, .46, .45, .94)",
              }}
              className="bg-[url(/sofa.jpeg)] image-mini"
            ></a>{" "}
            your stress, and ensuring you get the best value for your money.
          </div>
        </section>
        <section className="flex items-center justify-between mx-auto py-16">
         <div className="w-1/2 pr-8">
           <h4 className="text-lg font-medium uppercase text-textGray mb-5">
             What We Offer
           </h4>
           <h2 className="text-5xl font-bold text-darkSlate mb-6">
             Experience Unmatched Shopping Convenience
           </h2>
           <p className="text-textGray mb-8 max-w-xl">
             Discover a seamless shopping experience with our top-notch services
             and products. We are dedicated to bringing you the best value for
             your money, making shopping easier and more enjoyable.
           </p>
           <div className="space-y-8">
             <div className="flex gap-5">
               <span className="p-2.5 rounded-full bg-lightGray self-start">
                 <HiOutlineTruck className="text-3xl" />
               </span>
               <div>
                 <h5 className="text-xl font-semibold text-gray-900">
                   Free Shipping
                 </h5>
                 <p className="text-gray-600">
                   Enjoy free shipping on all orders over $50.
                 </p>
               </div>
        
              </div>

              <div className="flex gap-5">
               <span className="p-2.5 rounded-full bg-lightGray self-start">
                 <HiOutlineShieldCheck className="text-3xl" />
               </span>
               <div>
                 <h5 className="text-xl font-semibold text-gray-900">
                   24/7 Support
                 </h5>
                 <p className="text-gray-600">
                   Our support team is here to help you any time of the day.
                 </p>
               </div>
             </div>
 
             <div className="flex gap-5">
               <span className="p-2.5 rounded-full bg-lightGray self-start">
                 <HiOutlineArrowUturnLeft className="text-3xl" />
               </span>
               <div>
                 <h5 className="text-xl font-semibold text-gray-900">
                   Easy Returns
                 </h5>
                 <p className="text-gray-600">
                   Hassle-free returns within 30 days of purchase.
                 </p>
               </div>
             </div>
           </div>
         </div>
         <div className="w-1/2 pl-8">
           <img
             src="/person-buying-online.jpg"
             alt="Shopping Experience"
             className="w-full h-auto rounded-lg"
           />
          </div>
        </section>
      </div>
    );
  };
  
  export default Homepage;