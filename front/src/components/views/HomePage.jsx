import React from "react";

const HomePage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="flex h-screen bg-center bg-cover items-center justify-center"
      style={{ backgroundImage: `url('src/assets/camera.jpg')` }}
    >
      <h1 className="text-center text-white text-3xl sm:text-4xl md:text-6xl lg:text-6xl xl:text-6xl font-display backdrop-blur-sm">
        Charles Cantin - Photographe
      </h1>
    </div>
  );
};

export default HomePage;
