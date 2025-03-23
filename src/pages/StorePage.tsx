const StorePage = () => {  
   return (
    <div>
      <div className="overflow-hidden relative h-[25rem]">
        <img
          className="object-cover h-full w-full"
          src="store-hero.jpg"
          alt="Luxury Living Room"
        />
        <h1 className="text-9xl tracking-wider font-bold text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Shoptidy
        </h1>
      </div>
      <div className="py-16 grid grid-cols-[2fr_4fr]">
        <div>
          <div>
            <h3 className="heading-tertiary">Sort By</h3>
            <input type="text" placeholder="Price" />
          </div>
        </div>
        <div>Products</div>
      </div>
    </div>
  );
};

export default StorePage;