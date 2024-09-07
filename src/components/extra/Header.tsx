const Header = () => {
  return (
    <div className="flex justify-between items-center pt-10 w-full">
      <div className="flex items-center ">
        <img src="/scratchgpt_logo.png" alt="logo" className=" lg:h-8 xl:h-12" />
      </div>

      <div className="flex space-x-6 ">
        <button className="rounded-full bg-blue-400 text-white py-1 px-6 hover:bg-blue-700 transition text-sm w-40">
          Student signup
        </button>
        <button className="rounded-full bg-blue-400 text-white py-1 hover:bg-blue-700 transition text-sm w-40">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
