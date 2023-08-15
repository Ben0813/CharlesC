import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [currentPath, setCurrentPath] = useState("");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  // Handles navigation to a different page when a link is clicked
  const handleNavigation = (path) => {
    setCurrentPath(path);
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`bg-gray-700 text-white px-8 py-5 fixed top-0 left-0 right-0 z-10 font-display z-50 ${
        isMobileMenuOpen ? "bg-opacity-80" : "bg-opacity-100"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Navigation links for desktop */}
        <nav className="hidden md:flex space-x-4 w-full justify-between items-center">
          <Link
            to="/"
            className={`hover:text-gray-400 font-display ${
              currentPath === "/" ? "underline" : ""
            }`}
            onClick={() => handleNavigation("/")}
          >
            Accueil
          </Link>
          <Link
            to="/gallery"
            className={`hover:text-gray-400 font-display ${
              currentPath === "/gallery" ? "underline" : ""
            }`}
            onClick={() => handleNavigation("/gallery")}
          >
            Galerie
          </Link>
          <img src="src/assets/logo.png" alt="Logo" className="h-20 mx-2" />
          <Link
            to="/services"
            className={`hover:text-gray-400 font-display ${
              currentPath === "/services" ? "underline" : ""
            }`}
            onClick={() => handleNavigation("/services")}
          >
            Tarifs & Prestations
          </Link>
          <Link
            to="/contact"
            className={`hover:text-gray-400 font-display ${
              currentPath === "/contact" ? "underline" : ""
            }`}
            onClick={() => handleNavigation("/contact")}
          >
            Contact
          </Link>
        </nav>
        {/* Icons facebook and insta */}
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex ml-2 hover:text-gray-400"
        >
          <img
            src="src/assets/instagram.svg"
            alt="Instagram"
            className="h-4 w-4"
          />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex ml-1 hover:text-gray-400"
        >
          <img
            src="src/assets/facebook.svg"
            alt="Facebook"
            className="h-4 w-4"
          />
        </a>

        {/* Mobile layout */}
        <div className="md:hidden flex w-full justify-between items-center">
          <img src="src/assets/logo.png" alt="Logo" className="h-16 ml-4" />
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <svg width="24" height="24" fill="currentColor">
                <path
                  d="M6 18L18 6M6 6l12 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            ) : (
              <svg width="24" height="24" fill="currentColor">
                <path
                  d="M4 6h16M4 12h16m-16 6h16"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden mt-2 bg-gray-700 text-white">
          <ul className="flex flex-col items-center py-2 space-y-2">
            <Link
              to="/"
              className={`px-2 py-1 hover:text-gray-400 font-display ${
                currentPath === "/" ? "underline" : ""
              }`}
              onClick={() => handleNavigation("/")}
            >
              Accueil
            </Link>
            <Link
              to="/gallery"
              className={`px-2 py-1 hover:text-gray-400 font-display ${
                currentPath === "/gallery" ? "underline" : ""
              }`}
              onClick={() => handleNavigation("/gallery")}
            >
              Galerie
            </Link>
            <Link
              to="/services"
              className={`px-2 py-1 hover:text-gray-400 font-display ${
                currentPath === "/services" ? "underline" : ""
              }`}
              onClick={() => handleNavigation("/services")}
            >
              Tarifs & Prestations
            </Link>
            <Link
              to="/contact"
              className={`px-2 py-1 hover:text-gray-400 font-display ${
                currentPath === "/contact" ? "underline" : ""
              }`}
              onClick={() => handleNavigation("/contact")}
            >
              Contact
            </Link>
            {/* Icons facebook et insta for mobile */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <img
                src="src/assets/instagram.svg"
                alt="Instagram"
                className="h-4 w-4"
              />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <img
                src="src/assets/facebook.svg"
                alt="Facebook"
                className="h-4 w-4"
              />
            </a>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
