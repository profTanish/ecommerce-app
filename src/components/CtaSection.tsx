import Button from "./Button";
 
 const CtaSection = () => {
   return (
     <section className="py-16">
       <div className="flex flex-col gap-6 lg:flex-row justify-between lg:items-center">
         <div className="max-w-3xl space-y-5">
           <h1 className="heading-secondary">Ready To Explore Online World?</h1>
           <p>
             Discover the endless possibilities of online shopping with our
             easy-to-use platform. From exclusive deals to a wide range of
             products, we make your shopping experience effortless and enjoyable.
             Start your journey with us and find everything you need at your
             fingertips.
           </p>
         </div>
         <Button>
           <span className="relative z-10">Start Shopping</span>
         </Button>
       </div>
     </section>
   );
 };
 
 export default CtaSection;