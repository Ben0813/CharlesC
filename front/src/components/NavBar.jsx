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

  const handleNavigation = (path) => {
    setCurrentPath(path);
    navigate(path);
    setMobileMenuOpen(false);
  };

  const navItems = (
    <>
      <Link
        to="/"
        className={`px-2 py-1 hover:text-gray-400 font-display ${currentPath === "/" ? "underline" : ""}`}
        onClick={() => handleNavigation("/")}
      >
        Accueil
      </Link>
      <Link
        to="/gallery"
        className={`px-2 py-1 hover:text-gray-400 font-display ${currentPath === "/gallery" ? "underline" : ""}`}
        onClick={() => handleNavigation("/gallery")}
      >
        Galerie
      </Link>
      <Link
        to="/pricing"
        className={`px-2 py-1 hover:text-gray-400 font-display ${currentPath === "/pricing" ? "underline" : ""}`}
        onClick={() => handleNavigation("/pricing")}
      >
        Tarifs
      </Link>
      <Link
        to="/services"
        className={`px-2 py-1 hover:text-gray-400 font-display ${currentPath === "/services" ? "underline" : ""}`}
        onClick={() => handleNavigation("/services")}
      >
        Prestations
      </Link>
      <Link
        to="/contact"
        className={`px-2 py-1 hover:text-gray-400 font-display ${currentPath === "/contact" ? "underline" : ""}`}
        onClick={() => handleNavigation("/contact")}
      >
        Contact
      </Link>
    </>
  );

  return (
    <header className={`bg-gray-700 text-white px-8 py-4 fixed top-0 left-0 right-0 z-10 font-display ${isMobileMenuOpen ? "bg-opacity-80" : "bg-opacity-100"}`}>
      <div className="container mx-auto flex items-center justify-between">
        <nav className="hidden md:flex w-full justify-between space-x-6 md:space-x-12">
          {navItems}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <svg width="24" height="24" fill="none">
                <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            ) : (
              <svg width="24" height="24" fill="none">
                <path d="M4 6h16M4 12h16m-16 6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-2 bg-gray-700 text-white">
          <ul className="flex flex-col items-center py-2 space-y-2">
            {navItems}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
