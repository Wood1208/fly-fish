export const Footer = () => {
  return (
    <div className="w-full h-32 px-2 z-10 bg-black/80
    flex items-center justify-center">
      <div className="md:max-w-screen-2xl mx-auto flex flex-col items-center
      justify-center space-y-2 mb-10 mt-5">
        <p className="text-base text-white mt-6">
          ©2024 By Wood
        </p>
        <p className="text-base text-white flex gap-x-2">
          框架:
          <a 
            href="https://nextjs.org/"
            className="hover:text-blue-200 transition hover:underline">
            NextJs
          </a>
          主题:
          <a 
            href="https://butterfly.js.org/"
            className="hover:text-blue-200 transition hover:underline">
            Butterfly
          </a>
        </p>
        <p className="text-base text-white">
          Thank for you support~
        </p>
      </div>
    </div>
  );
};

