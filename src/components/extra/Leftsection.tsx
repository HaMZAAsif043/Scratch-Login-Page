

export const LeftSection = () => {
  return (
    <div className="flex flex-col items-start justify-center space-y-6">
      <h1 className="text-2xl font-semibold text-center ">
        Learn and code wonders <br /> with AI-native Scratch!
      </h1>
      <div className="flex items-center space-x-4">
        <div className="w-20 h-20">
          <img src="triangle.png" alt="" className="rotate-12" />
        </div>
        <p className="pl-11">
          The world’s <br />
          most powerful <br />
          Scratch sidekick
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-pink-500 w-20 h-20 rounded-full "></div>
        <p className="pl-11">
          All the tools <br /> a teacher needs <br /> and kids want
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="mt-10 bg-yellow-300 w-20 h-20 rotate-45 pr-10"></div>
        <p className="mt-10 space-x-2 pl-11">
          Anytime, <br />
          anywhere
        </p>
      </div>
    </div>
  );
};
