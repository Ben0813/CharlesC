import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md text-center">
        <h1 className="text-6xl font-display mb-6">404</h1>
        <p className="text-xl mb-4 font-display">
          Oups! Il semble que nous ayons perdu cette photo.
        </p>
        <p className="text-md mb-6 font-display">
          La page que vous recherchez a peut-être été déplacée ou supprimée.
        </p>
        <Link to="/" className="text-blue-600 hover:underline font-display">
          Retournez à l'accueil
        </Link>
        <div className="mt-6">
          <img
            src="src/assets/camera.jpg"
            alt="Camera"
            className="w-40 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
