const Footer = () => {
  return (
    <>
      <div className="w-screen bg-blue-800 flex flex-col md:flex-row justify-center md:justify-evenly items-center h-screen md:h-fit">
        <h1 className="text-3xl lg:text-6xl text-white text-center lg:text-left flex flex-col lg:flex-col-reverse items-center lg:items-start  lg:mt-0">
          <div className="w-8 h-8 lg:w-16 md:h-16 rotate-45">
            <img src="triangle.png" alt="" />
          </div>
          What will <br />
          you students <br />
          create today?
          <div className="bg-yellow-300 w-8 h-8 lg:w-10 lg:h-10 rotate-12 lg:ml-20"></div>
        </h1>
        <div className="text-center md:text-left mt-10 lg:mt-0">
          <h1 className="font-sm md:font-medium text-white font-md text-lg md:text-lg">
            Sign up to stay in touch!
          </h1>
          <p className="text-white text-xs md:hidden">
            Be the first to know about the news <br /> updates and more
          </p>
          <div className="relative rounded-lg h-4 md:h-fit w-10vw lg:w-10vw mt-5">
            <input
              type="text"
              className="rounded-lg w-full h-10 p-5 pr-[4rem] rounded-tr rounded-br" /* Adjusted for full width */
              placeholder="Email Address"
            />
            <button className="absolute px-4 -right-4 top-5 transform -translate-y-1/2 text-sm border-x-emerald-50 rounded-full bg-blue-950 w-1/2 h-11 z-8 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-white pb-3 bg-blue-800 text-center flex flex-col-reverse justify-evenly text-sm mb-0 md:flex-row">
        <p className="text-sm">All rights reserved @2024</p>
        <div className="flex flex-col md:flex-row pr-4 mb-6 ">
          <p className="md:mr-5">Privacy Policy</p>
          <p>Terms</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
