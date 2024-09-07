const LeftSection= () => {
  return (
    <div className="flex flex-col items-center md:items-start md:px-0 md:h-screen md:mt-0 w-full md:w-1/2 mb-6 md:mb-0">
      <h1 className="text-xl lg:text-2xl font-semibold">
        Learn and code <br />
        wonders with AI- <br />
        native Scratch!
      </h1>
      <div className="flex mt-5">
        <div className="items-center">
          <img
            src="/triangle.png"
            alt=""
            className="w-10 h-10 md:w-20 md:h-20 rotate-12"
          />
        </div>
        <p className="text-sm lg:text-base pl-5">
          The world’s <br />
          most powerful <br />
          Scratch sidekick{" "}
        </p>
      </div>

      <div className="flex mt-5">
        <div className="bg-pink-500 w-10 h-10 md:w-20 md:h-20 rounded-full"></div>
        <p className="text-sm lg:text-base pl-5">
          The world’s <br />
          most powerful <br />
          Scratch sidekick
        </p>
      </div>
      <div className="flex items-center mt-5 mr-8">
        <div className="bg-yellow-300 w-10 h-10 md:w-20 md:h-20 rotate-45 md:mt-10"></div>
        <p className="text-sm lg:text-base pl-7 text-center mt-10">
          Anytime, <br />
          anywhere
        </p>
      </div>
    </div>
  );
};

export default LeftSection;
