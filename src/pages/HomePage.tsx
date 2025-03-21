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
  
        <section>
          <h4 className="text-lg font-medium uppercase text-textGray">
            How it Works
          </h4>
          <div>
            <article className="flex items-center">
              <figure>
                <h2>Browse Our Collection</h2>
                <p>
                  Explore our extensive range of products from the comfort of your
                  home. Whether you're looking for the latest fashion,
                  cutting-edge electronics, or everyday essentials, our intuitive
                  interface makes it easy to find exactly what you need.
                </p>
              </figure>
              <div className="max-w-md">
                <img src="/how-it-works-1.jpg" alt="person buying online" />
              </div>
            </article>
          </div>
        </section>
      </div>
    );
  };
  
  export default Homepage;