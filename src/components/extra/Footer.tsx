const Footer = () => {
    return (
      <>
        <div className="w-screen h-fit bg-blue-800 flex justify-evenly items-center">
          <h1 className="text-6xl text-white  flex flex-col">
            <div className="w-16 h-16 rotate-45">
              <img src="triangle.png" alt="" />
            </div>
            What will <br />
            you students <br />
            create today?
            <div className="bg-yellow-300 w-10 h-10 rotate-12 pl-20"></div>
          </h1>
          <div>
            <h1 className="font-medium text-white text-lg">
              Sign up to stay in touch!
            </h1>
            <div className="relative rounded-lg h-4 w-10vw mt-10">
              <input
                type="text"
                className="rounded-lg w-4vw h-10 p-5 pr-[4rem]" /* Add extra padding on the right */
              />
              <button className="absolute -right-4 top-5 transform -translate-y-1/2 border-x-emerald-50 rounded-full bg-blue-950 w-1/2 h-11 z-8 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="text-white pb-3 bg-blue-800 text-center flex justify-evenly text-sm">
          <p className="text-sm">All rights reserved @2024</p>
          <div className="flex justify-evenly pr-4">
            <p className="pr-5">Privacy Policy</p>
            <p>Terms</p>
          </div>
        </div>
      </>
    );
    
};

export default Footer;
